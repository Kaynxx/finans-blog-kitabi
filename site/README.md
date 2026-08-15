# site/ — Astro iskeleti

Blogun kaynak kodu. Tasarım vitrini `/tasarim` rotasında canlı yayınlanır.

**Canlı:** https://kaynxx.github.io/finans-blog-kitabi/tasarim/

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/ üretir
npm run preview   # dist/ önizleme
npm run fonts     # fontları Türkçe setine subset'ler (fonttools gerekir)
```

## Yığın

| Katman | Seçim | Neden |
|---|---|---|
| Framework | Astro 5 | Varsayılan sıfır JS. Reklam script'leri ana thread'i zaten yiyecek. |
| Barındırma | Cloudflare Pages | Bütçe A (0 USD) |
| Font | Kendi barındırdığımız, subset'lenmiş | Üçüncü taraf isteği yok → KVKK'da daha temiz, CLS kontrol altında |
| Stil | Salt CSS + custom properties | Tailwind yok: token'lar tek dosyada okunabilir kalsın |
| İçerik | Markdown / MDX | Taşınabilir, kilitsiz |

## Ölçülmüş sonuçlar

Boş iddia yok — hepsi headless Chromium'da ölçüldü.

| Metrik | Ölçüm | Bütçe |
|---|---:|---:|
| CLS (`/tasarim`, reklam slotları dahil) | **0** | ≤ 0,10 |
| İstemci JS | **2,25 kB** (gzip 1,01 kB) | ≤ 120 kB |
| Font toplamı | **95,5 kB** | ≤ 100 kB |
| Üretilen sayfa | 2 | — |

### CLS 0,53 → 0 hikâyesi

İlk ölçümde CLS **0,5264** çıktı. Suçlu reklam slotları değildi — `PerformanceObserver`
kaynakları 23–25 ms'de `SECTION.blok` ve `#text` gösterdi: **font swap**.

Fontsource'un varsayılanı `font-display: swap`. Tarayıcı önce Georgia/Arial çiziyor,
gerçek font gelince değiştiriyor, tüm metin yeniden akıyor.

Çözüm: fontları kendimiz barındırıp `font-display: optional` yazmak. `optional`
ilk boyamadan sonra asla değiştirmez → tanım gereği CLS üretmez. Preload ile de
fontun zamanında yetişme olasılığı yükseliyor.

Bedeli: çok yavaş bağlantıda ilk ziyarette yedek font görünür. Kabul edildi.

### Font subsetting

Fontsource'un `latin-ext` subset'i tüm Latin Extended-A'yı taşıyor (83 kB), oysa
Türkçe için gereken yalnızca `Ğğ İı Şş`.

| Dosya | Önce | Sonra | Azalma |
|---|---:|---:|---:|
| `inter-latin.woff2` | 47,1 kB | 42,8 kB | %9,2 |
| `inter-latin-ext.woff2` | 83,1 kB | **3,3 kB** | %96,0 |
| `source-serif-4-latin.woff2` | 49,6 kB | 45,5 kB | %8,4 |
| `source-serif-4-latin-ext.woff2` | 41,1 kB | **3,9 kB** | %90,5 |
| **Toplam** | **220,9 kB** | **95,5 kB** | **%56,8** |

`latin-ext` dosyası **silinmedi**, küçültüldü. Türkçe glifler orada yaşıyor;
sadece `latin` yüklenirse `ğ İ ı ş` başka fonttan gelir ve satır ritmi bozulur.

## Dizin yapısı

```
src/
├─ styles/
│  ├─ tokens.css      ← tek doğruluk kaynağı: renk, boşluk, tipografi
│  ├─ fonts.css       ← @font-face, font-display:optional, unicode-range
│  └─ global.css      ← taban stiller, tablo, odak halkası
├─ lib/format.ts      ← Intl tabanlı TR sayı/para/tarih + toLocale*Case('tr-TR')
├─ layouts/Base.astro ← head, robots, preload, üst/alt bilgi
├─ components/
│  ├─ AdSlot.astro         ← CLS-güvenli, "REKLAM" etiketli, ayrılmış alan
│  ├─ Disclaimer.astro     ← SPK uyarısı (kısa/tam) — AVUKAT ONAYI GEREKİR
│  ├─ NewsletterForm.astro ← tek alan + ayrı KVKK onayı + tüm durumlar
│  ├─ DataCard.astro       ← değer/değişim/kaynak, boş durum dahil
│  └─ SourceBlock.astro    ← birincil kaynak + erişim tarihi
└─ pages/
   ├─ index.astro
   └─ tasarim.astro   ← kamuya açık tasarım vitrini
```

## Değiştirilemez kurallar

1. Çıplak hex veya px yok — her değer `tokens.css`'ten gelir.
2. Sayı biçimlendirme elle yapılmaz — `lib/format.ts` kullanılır.
3. Kullanıcıya görünen harf dönüşümünde `toLocaleUpperCase('tr-TR')` kullanılır.
   Varsayılan `toUpperCase()` `ılık` → `ILIK` yerine bozuk çıktı verir.
4. Font subset'inde `latin-ext` korunur.
5. Reklam slotu alanı istekten önce ayrılır; boş dönerse ani çökmez.
6. İlk viewport'ta reklam yok. Bülten CTA'sı ile reklam aynı ekranda yarışmaz.
7. CLS 0,1'i aşarsa yeni reklam slotu eklenmez.

## Henüz yapılmadı

- [ ] Alan adı ve `astro.config.mjs` içindeki `site` değeri
- [ ] Kit (ConvertKit) form `action` URL'i — şu an demo modda
- [ ] Makale koleksiyonu (content collections) ve makale şablonu
- [ ] `/hakkinda`, `/kvkk`, `/cerez`, `/editoryal-politika` sayfaları
- [ ] Consent Mode v2 + CMP
- [ ] `ads.txt` (AdSense onayından sonra)
- [ ] Sitemap ve RSS
- [ ] Disclaimer metninin avukat onayı
