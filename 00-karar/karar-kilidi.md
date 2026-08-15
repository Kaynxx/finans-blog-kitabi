# Karar Kilidi

Kurucunun cevaplarıyla kilitlenen kararlar. Bu dosya `ozet.md`'deki senaryo matrislerini
tek bir hücreye indirir.

| Girdi | Cevap |
|---|---|
| Yazar / marka | **Fikret Taha Boz** — kişisel isim |
| Kod | Ajan yazacak → **T2 yolu açık** |
| Bütçe | **A: 0–10 USD/ay** |
| Kapasite | **25 saat/hafta** |
| Yaş | 29 altı |
| Vergi | *"Babam adına vergilendirme olacak"* → **§3'te ciddi uyarı var** |

---

## 1. Kilitlenen yığın — A × T2

```
İçerik      →  Markdown / MDX, git'te
Site        →  Astro (statik, sıfır varsayılan JS)
Barındırma  →  Cloudflare Pages            0 USD
DNS / CDN   →  Cloudflare                  0 USD
Bülten      →  Kit (ConvertKit) ücretsiz   0 USD  — 10.000 aboneye kadar
Analitik    →  Umami (self-host) + Google Search Console   0 USD
Reklam      →  Manuel AdSense birimleri (Auto Ads KAPALI)
Vitrin      →  /tasarim rotası, üretim kodunun aynısı
Depo        →  github.com/Kaynxx/finans-blog-kitabi (public)
─────────────────────────────────────────────────────────
Tek zorunlu gider: alan adı ≈ 12–15 USD/yıl (≈ 1 USD/ay)
```

Bütçe A'ya rahat sığıyor. Zoho Mail (~1–3 USD/ay) tek isteğe bağlı kalem; başlangıçta
Cloudflare Email Routing ile ücretsiz yönlendirme yeterli.

**KARAR: Yığın kilitli. Ghost Pro ve Substack elendi — tasarım kontrolü ve `/tasarim`
vitrini gereksinimini karşılamıyorlar.**

---

## 2. Tempo revizyonu — 25 saat/hafta

Araştırma turları 8–10 saat/hafta varsaymıştı. 25 saat bunun 2,5 katı ve planı değiştiriyor:
`05-seo`'daki **agresif 90 günlük 1.000 abone planı artık uygulanabilir.**

| | Araştırmanın varsayımı (8–10 sa) | Kilitlenen plan (25 sa) |
|---|---|---|
| Blog yazısı | 2 haftada 1 | **Haftada 2** |
| Bülten | Haftada 1 | Haftada 1 |
| Araç / şablon | Ayda 1 | **2 haftada 1** |
| Video | Yok | **Haftada 1 uzun + 4 kısa** |
| Dağıtım | Sınırlı | X + LinkedIn günlük |
| 90 gün hedefi | 300–700 abone | **1.000 abone** |

Haftalık döngü: Pzt veri toplama · Sal–Çar yazım · Per doğrulama + tasarım · Cum yayın +
bülten · Cmt dağıtım/video · Paz boş (tükenmişlik payı — pazarlıksız).

**KARAR: Agresif plan seçildi. Ancak 8 hafta kesintisiz yayın, toplam sayıdan önemli —
tempo tutturulamıyorsa haftada 1 yazıya düş, yayını kaçırma.**

---

## 3. ⚠️ VERGİ — "babam adına" kararı 1.200.000 TL'ye mal olabilir

Bu, kitaptaki en pahalı tek karar. Doğrulanmış veriyle:

### Genç girişimci istisnası şartları (doğrulandı)

- İşe başlama tarihinde **29 yaşını doldurmamış** olmak
- **Kendi adına ilk defa** gelir vergisi mükellefi olmak
- İşi **bizzat sevk ve idare etmek**
- İşe başlamayı süresinde bildirmek
- Şahıs işletmesi / adi ortaklık olmalı — **limited/anonim şirket yararlanamaz**

**Değeri: yılda 400.000 TL, 3 vergilendirme dönemi → toplam 1.200.000 TL gelir vergisi muafiyeti.**

### Sorun

Sen 29 altısın, yani bu hak **sende var**. Vergilendirme babanın adına yapılırsa mükellef
baban olur; baban büyük olasılıkla hem 29 üstü hem de ilk defa mükellef değil.
**Hak tamamen yanar.**

Ayrıca: bu hak **hayatta bir kez** kullanılır ve **ilk mükellefiyete** bağlıdır. Şimdi baban
adına başlayıp sonra kendi adına geçmek işe yaramaz — "ilk defa mükellef olma" şartını
zaten kaybetmiş olursun. 29'u doldurduğunda da kapı kapanır.

### Ama karar bu kadar basit değil — Bağ-Kur

Vergi mükellefiyeti kurduğun an **4/b (Bağ-Kur) sigortalılığı zorunlu hale geliyor.**
Bu, GVK mük. 20/B istisna belgesi alsan bile geçerli — istisna belgesi vergi
yükümlülüğünü hafifletir, **SGK primini kaldırmaz.**

2026 asgari 4/b primi: **~10.156 TL/ay ≈ 122.000 TL/yıl**, gelirin sıfır olsa bile.

| Yol | Gelir vergisi | Yeni SGK yükü | Not |
|---|---|---|---|
| **Kendi adına** | İlk 400.000 TL × 3 yıl **muaf** | **+122.000 TL/yıl** (yeni Bağ-Kur) | Hak kullanılır, gelir senin |
| **Baba adına** | İstisna **yok** | Baban zaten prim ödüyorsa **+0** | Hak yanar, gelir hukuken babanın |

Baban zaten Bağ-Kur/vergi mükellefiyse kısa vadede babanın adı daha ucuz görünüyor.
Uzun vadede 1,2 milyon TL'lik hakkı yakıyorsun.

### Şu an ne yapmalısın: HİÇBİR ŞEY

Geliriniz sıfır. Yol haritasına göre ilk gelir **6+ ay** sonra. Şimdi mükellefiyet kurmak
kazanç yokken yılda 122.000 TL prim ödemek demek. Türk mevzuatı zaten mükellefiyeti
**faaliyetin/gelirin başlangıcına** bağlıyor.

**KARAR: İlk gelire kadar hiçbir vergi kaydı açma. İlk sponsorluk/AdSense ödemesi
görününce, o an bir SMMM'ye şu üç soruyu yazılı sor:**

1. Babamın mevcut mükellefiyeti ve SGK statüsü ne? Bu faaliyeti eklemenin marjinal SGK maliyeti sıfır mı?
2. Benim adıma genç girişimci istisnası + GVK mük. 20/B birlikte nasıl çalışır, hangisi avantajlı?
3. 29 yaşımı dolduracağım tarih itibarıyla bu hakkı kullanmazsam kaybım ne olur?

### Diğer sonuçlar

Vergilendirme babanın adına olursa **kimlik ayrışması** doğar:

| Katman | Kim |
|---|---|
| Yazar / E-E-A-T / marka | Fikret Taha Boz |
| Fatura / sözleşme / hukuki muhatap | Baban |
| İYS hizmet sağlayıcı kaydı | Baban (unvan farklıysa **marka tescil belgesi** gerekir) |
| AdSense hesabı + W-8BEN | Baban |
| GVK 20/B münhasır banka hesabı | Baban |

Sponsorluk sözleşmesi imzalarken muhatap baban olacak. Bunu şimdiden bil.

---

## 4. Marka ve alan adı

Kişisel isim seçildi: **Fikret Taha Boz**. E-E-A-T açısından doğru karar — finans YMYL
alanı ve Google gerçek yazar kimliği arıyor.

Alan adı adayları (sırayla kontrol et):

| Aday | Değerlendirme |
|---|---|
| `fikrettahaboz.com` | Uzun (16 karakter) ama kesin sahiplik, en güvenli |
| `tahaboz.com` | Kısa, akılda kalıcı, hâlâ kişisel |
| `fikretboz.com` | Kısa alternatif |
| `<konu-markası>.com` + "Fikret Taha Boz tarafından" | Marka satılabilir olur ama kişisel bağ zayıflar |

**KARAR: `tahaboz.com` birinci tercih, `fikrettahaboz.com` yedek. `.com.tr` savunma kaydı
sonraya bırakılabilir (bütçe A). Sosyal kullanıcı adı ve Türk Patent çakışması alım
öncesi kontrol edilmeli.**

---

## 5. Araştırmada geçersiz kalan iki bilgi

Canlı doğrulama, araştırma turlarının iki ifadesini geçersiz kıldı:

| Nerede | Yanlış olan | Doğrusu |
|---|---|---|
| `03-hukuk` §3 | *"Uygun kişiler ayrıca bir yıl asgari 4/b prim desteği alabilir"* | **1 Ocak 2026 itibarıyla genç girişimci Bağ-Kur prim desteği KALDIRILDI.** Sadece gelir vergisi istisnası devam ediyor. |
| `03-hukuk` §3–4 | 20/B'nin SGK etkisi belirtilmemişti | **20/B istisna belgesi Bağ-Kur 4/b zorunluluğunu kaldırmaz.** Vergi mükellefiyeti = zorunlu 4/b. |

Bu iki düzeltme, §3'teki "gelir gelene kadar kayıt açma" kararının temel gerekçesi.

---

## 6. Sıradaki adımlar

Kilitlenen kararlarla Hafta 0 kısaldı — vergi ve şirket işleri ertelendi.

- [x] Yığın seçimi
- [x] Tempo planı
- [x] Vergi kararı (→ ertelendi, gerekçeli)
- [ ] Alan adı kontrolü ve alımı — **senin yapacağın tek şey**
- [ ] Astro iskeleti + design token'ları *(ajan)*
- [ ] `/tasarim` vitrini *(ajan)*
- [ ] Makale şablonu, bülten formu, disclaimer, reklam slotu *(ajan)*
- [ ] Editoryal politika metni
- [ ] Kit hesabı + `news.` alt alan adı + SPF/DKIM/DMARC
- [ ] İYS başvurusu — *ilk ticari gönderimden önce*
