# Ana Karar Özeti ve Araştırma Planı

Sekiz araştırma turunun birleştirilmiş sonucu. Turlar arası çelişkiler burada çözüldü;
`kaynaklar/dogrulanmis-olgular/` ile çelişen her şey ayıklandı.

---

## 0. Senin öncelik sıran, işi nasıl değiştiriyor

Söylediğin üç şey var: **tasarım birinci**, **herkes tasarımı inceleyebilsin**, **reklam
geliri olsun**. Bu üçü teknoloji seçimini neredeyse tek başına belirliyor.

| Söylediğin | Doğrudan sonucu |
|---|---|
| Tasarım birinci öncelik | Substack ve Medium **elenir** — tasarım kontrolü yok. Ghost Pro tema sınırlı. Frontend'e sahip olman gerekir. |
| Herkes tasarımı incelesin | Sitede canlı bir `/tasarim` rotası + açık GitHub reposu gerekir. Bu, kendi kodun olmasını gerektirir. |
| Reklam geliri | Reklam slotunun **birinci sınıf tasarım bileşeni** olması gerekir. Sonradan yapıştırılan AdSense Auto Ads tasarımı öldürür. |

Bu üçünün kesişimi tek bir cevap veriyor: **kendi frontend'ini sahiplen.**

### Ama önce dürüst uyarı: tasarım ve reklam birbirini yiyor

Reklam, tasarımın düşmanıdır. Üçüncü taraf bir iframe'in içindeki yaratıcının fontunu,
rengini, hareketini kontrol edemezsin. Yapabileceğin tek şey **çerçeveyi** kontrol etmek:
sabit yükseklik, ayrılmış alan, net "Reklam" etiketi, çevresinde bol boşluk.

Ve sayılar acı: Türkiye trafiğinde 10.000 aylık sayfa görüntüleme **ayda 5–25 USD** eder.
Yani reklamı "gelir" diye kurarsan hem tasarımı bozarsın hem de kahve parası kazanırsın.

**KARAR: Reklamı ilk günden gelir kalemi olarak değil, altyapı olarak kur. Slot yerleri,
consent yönetimi, `ads.txt` gün 1'de hazır olsun; ama gelir beklentisi 50.000 görüntülemeden
sonra başlasın. Asıl para bülten sponsorluğunda.**

---

## 1. Pazarlıksız kısıtlar (doğrulanmış)

Bunlar tercih değil, verili gerçekler. Detay: [`kaynaklar/dogrulanmis-olgular/`](../kaynaklar/dogrulanmis-olgular/README.md)

| # | Kısıt | Sana etkisi |
|---|---|---|
| 1 | **İYS kaydı zorunlu** — bülten "ticari elektronik ileti" sayılır, vergi mükellefi olmasan bile | İlk bülteni göndermeden önce İYS kaydı. Onaylar 3 iş günü içinde yüklenmeli. Yurt dışı ESP bunu kaldırmaz. |
| 2 | **Stripe Türkiye'de yok** | Substack/beehiiv/Ghost'un yerleşik ücretli aboneliği çalışmaz. Ücretli katman planlıyorsan iyzico/PayTR veya MoR gerekir. |
| 3 | **SPK m.109: 2–5 yıl hapis**, m.107: 3–5 yıl. "YTD" notu kalkan değil | Hisse adı verip "al" demek, hedef fiyat yayınlamak, ücretli sinyal satmak = ceza riski. |
| 4 | **GVK mük. 20/B: 2026 sınırı 5.300.000 TL**, %15 stopaj nihai vergi | Blog yazarları kapsamda. Ama **tüm hasılat tek münhasır banka hesabına** gelmeli — tek istisna dışı ödeme, geriye dönük cezalı tarhiyat. |
| 5 | **TR AdSense RPM'i düşük** | 10k görüntüleme ≈ 5–25 USD/ay. ABD trafiği 3–10 kat fazla. "Finans nişi yüksek CPM" lafı ülke bağlamı olmadan yanıltıcı. |

---

## 2. Önerilen yığın

Bütçe/teknik senaryolarına göre matris `01-platform`'da. Senin **tasarım-birinci +
kamuya açık tasarım** gereksinimin senaryoyu zaten seçiyor:

```
İçerik      →  Markdown / MDX  (git'te, taşınabilir, kilitsiz)
Site        →  Astro           (statik, sıfır gereksiz JS, tam tasarım kontrolü)
Barındırma  →  Cloudflare Pages (0 USD)
DNS/CDN     →  Cloudflare
Bülten      →  Kit (ConvertKit) — ücretsiz katman 10.000 aboneye kadar
Gönderim    →  news.<alan-adi>.com alt alan adı, paylaşımlı IP
Kurumsal e-posta → Zoho Mail (~1–3 USD/kullanıcı/ay)
Analitik    →  Plausible veya Umami + Google Search Console
Reklam      →  Manuel AdSense birimleri (Auto Ads KAPALI)
Tasarım vitrini → aynı kod tabanında /tasarim rotası + bu GitHub reposu
Ödeme       →  (gerekirse) Shopier ilk ürün testi → iyzico/PayTR ölçekte
```

**Neden Astro, Next.js değil:** Bu bir blog. Sunucu tarafı çalışma zamanına, veritabanına,
API rotalarına ihtiyacın yok. Astro varsayılan olarak sıfır JavaScript gönderir — reklam
script'leri ana thread'i zaten yiyeceği için performans bütçesinin tamamına ihtiyacın var.

**Neden Ghost Pro değil:** Kod yazmak istemiyorsan Ghost Pro doğru cevap (aylık ~18–29 USD,
bülten yerleşik). Ama tema sistemi seni sınırlar ve `/tasarim` vitrini kuramazsın.
Tasarımı birinci öncelik yaptığın için eleniyor.

**Neden Substack değil:** Tasarım kontrolü yok, %10 gelir payı var ve Stripe'a bağlı olduğu
için Türkiye'den ücretli abonelik zaten çalışmıyor.

**KARAR: Astro + Cloudflare Pages + Kit. Kod yazmayacaksan tek alternatif Ghost Pro, ama
o zaman "herkes tasarımı incelesin" hedefinden vazgeçiyorsun.**

---

## 3. Tasarım kararları (özet — detay `08-tasarim`)

**Konumlandırma:** Financial Times'ın editoryal sakinliği + Our World in Data'nın kaynak
disiplini + Axios'un taranabilirliği.

**Tipografi:** Source Serif 4 (başlık) + Inter (gövde). Gövde 18px, satır yüksekliği 1.70,
okuma genişliği 68ch.

> **Türkçe tuzağı:** Font subset'inde `latin-ext` korunmalı. Sadece `latin` seçersen
> `ğ İ ı ş` glifleri düşer ve satır ritmi bozulur. Her sürümde şu dizgiyi test et:
> `IĞDIR, İstanbul, ılık öğüş, Şirket, çözüldü — 1.234.567,89 ₺`

**Sayılar:** `font-variant-numeric: tabular-nums` — pazarlıksız. Fiyat güncellendiğinde
sütun oynamasın. Biçimlendirme `Intl.NumberFormat('tr-TR')` ile, elle değil.

**Renk:** Nötr sıcak zemin `#F7F4ED`, tek marka rengi `#0B5CAD`, pozitif `#087A55`,
negatif `#B42318`. Yeşil/kırmızı **tek sinyal olamaz** — `▲ +%2,40` / `▼ −%1,15` şeklinde
işaretle de tekrarla (renk körlüğü).

**Karanlık mod:** Lansmana yetiştirme. Grafik + reklam + görsel QA yükünü ikiye katlar.

**Vitrin kararı:** Ayrı Storybook değil, **üretim sitesinde `/tasarim` rotası**. Aynı koddan
render edilir, senkron sorunu olmaz. Storybook ancak bileşen sayısı 30'u geçince.

**"Ucuz finans sitesi" sinyalleri — asla yapma:** takım elbiseli stok fotoğraf, altın para
yığını, neon gradyan, üçten fazla font, kayan ticker, sahte sayaç, kırmızı ünlem rozeti.

---

## 4. Reklam kararları (özet — detay `07-reklam`)

**En kritik düzeltme:** *AdSense Management API v2 reklam sunmaz.* Sadece raporlama ve hesap
yönetimi verir. Reklamı `adsbygoogle.js` script'i sunar. API'yi ancak kendi panelinde RPM
grafiği göstermek istersen kullanırsın.

**Auto Ads kapalı kalacak.** Sayfayı analiz edip kendi kararıyla reklam serpiştirir;
tipografi ritmini ve CTA hiyerarşisini bozar. Manuel birimler.

**CLS'i sıfırlayan kalıp:**
```css
.ad-slot {
  display: grid; place-items: center;
  width: 100%; min-height: 280px;
  margin-block: 2rem; overflow: hidden;
  contain: layout paint;
}
```
Reklam boş dönerse konteyneri **ani çökertme** — CLS yaratır.

**Yoğunluk kuralları:**
- İlk viewport'ta reklam yok
- Mobilde en fazla 2, masaüstünde en fazla 3 slot
- Bülten CTA'sı ile reklam **aynı viewport'ta yarışmaz** — CTA öncelikli
- Her slotta görünür "REKLAM" etiketi (örtülü reklam TR'de yasak)

**Consent:** Reklam çerezleri Türkiye'de de varsayılan `denied`. KVKK Çerez Rehberi açık rıza
istiyor; "Reddet" butonu "Kabul et" ile eşit belirginlikte. Başlangıç CMP'si: Google Privacy
& Messaging (ücretsiz).

**Prebid.js / header bidding:** 100.000 görüntülemeden önce **kurma**. Gelir artışı,
performans ve operasyon maliyetini karşılamaz.

---

## 5. İçerik tezi

Seçilen kazanma tezi: **"Enflasyon altında çalışan finansı"**

> Türkiye'de maaşla yaşayanlar için enflasyon, vergi ve finansal ürünleri gerçek rakamlarla
> sadeleştiren haftalık karar rehberi.

**Neden bu:** Kitle büyük, acı gerçek ve sürekli, içerik ücretsiz resmî veriyle (EVDS, TÜİK,
TCMB, TEFAS, KAP, GİB) üretilebilir ve **SPK riski en düşük** alan. Hisse tavsiyesi vermeden
yüksek değer üretebilirsin.

**Pazardaki gerçek boşluk:** "Bir finans konusunu daha anlatmak" değil. Tarih damgalı veri +
açık formül + indirilebilir şablon + gerçek hane vakasını **aynı içerikte** birleştiren
bağımsız bir karar laboratuvarı.

**Blog / bülten iş bölümü:** Blog = aranan sorunun eksiksiz, kalıcı cevabı. Bülten = "bu hafta
ne değişti, neden önemli, hangi adım atılabilir". Aynı metni iki yere kopyalamak bülteni
gereksizleştirir.

**Tempo (solo, sürdürülebilir):** haftada 1 bülten + iki haftada 1 derin yazı + ayda 1 araç.

---

## 6. Gelir yol haritası

| Aşama | Ne açılır | Ölçülebilir kapı |
|---|---|---|
| 0–6 ay | Gelir yok. Güven ve talep doğrulama | 1.000 abone, 8 hafta kesintisiz yayın, CTR ≥%2 |
| 500 abone | Sınırlı affiliate | Son 4 bültende benzersiz CTR ≥%2 |
| 1.000 abone | İlk dijital ürün (şablon/e-kitap) | En az 10 satış |
| 2.500 abone | **Bülten sponsorluğu** — asıl gelir | Açılma ≥%35, düzenli yayın ≥8 hafta |
| 5.000 abone | Ücretli katman (sadece kanıtlanmış talep varsa) | 100 kişilik bekleme listesi veya 25 peşin müşteri |
| 50.000 görüntüleme/ay | Reklam anlamlı gelir olmaya başlar | — |

**Kural:** Hiçbir aşamada tek sponsor toplam gelirin %25'ini, sponsor+affiliate toplamı
%70'ini geçmesin.

> **Çelişki notu:** `01-platform` ücretli aboneliği 500 abonede, `06-monetizasyon` 5.000'de
> açmayı önerdi. **5.000 esas alındı** — daha iyi gerekçelendirilmiş ve erken paywall en sık
> yapılan hata.

---

## 7. Ölçüm

**Açılma oranı karar KPI'ı değildir.** Apple Mail Privacy Protection pikselleri otomatik
yüklüyor; rakam şişik.

| Birincil KPI | Hedef | Alarm |
|---|---:|---:|
| Benzersiz tıklama oranı (CTR) | %2–5 | <%1,5 |
| Aylık net abone büyümesi | ilk yıl %5–10 | 2 ay üst üste <%2 |
| Spam şikâyeti | <%0,1 | ≥%0,1 |
| Abonelikten çıkış | <%0,3 | >%0,5 |
| Core Web Vitals (saha) | LCP ≤2,5s · INP ≤200ms · CLS ≤0,10 | CLS >0,1 → yeni slot ekleme |

---

## 8. Yapılacaklar sırası

### Hafta 0 — karar ve hukuk (kod yok)
1. Tek cümlelik bülten vaadini yaz ve sabitle.
2. Editoryal politikayı yaz: kişiye özel tavsiye, al/sat sinyali, hedef fiyat **yasak**.
3. SMMM'ye yazılı sor: 20/B kapsamı, genç girişimci istisnası (29 yaş altıysan, 2026 sınırı
   400.000 TL), 4/a–4/b durumu.
4. Marka adı: `.com` + `.com.tr` + sosyal kullanıcı adı + Türk Patent çakışma kontrolü.

### Hafta 1 — altyapı
5. Alan adını al, Cloudflare DNS'e taşı.
6. `news.<alan>.com` için SPF + DKIM + DMARC (`p=none` başla).
7. **İYS başvurusunu başlat.** Unvan farklıysa marka belgesi yükle.
8. KVKK aydınlatma metni + ayrı (işaretsiz) ticari ileti onay kutusu + double opt-in.

### Hafta 2–3 — tasarım sistemi
9. Design token'ları yaz (renk/boşluk/tipografi — taslak `08-tasarim`'da hazır).
10. `/tasarim` rotasını kur: token'lar, Türkçe font testi, bileşen durumları, **reklam
    placeholder'ı** dahil.
11. Bileşenleri üret: makale şablonu, bülten formu, **disclaimer bloğu**, veri kartı, grafik
    konteyneri, kaynak bloğu, reklam slotu.
12. Reklam slotlarının yerini **reklamsız** şablonda belirle. Sonradan sıkıştırma.

### Hafta 3–4 — içerik ve yayın
13. Altı güven sayfası: Hakkımızda, Yazar, Editoryal Politika, Düzeltme Politikası, Gizlilik/KVKK, İletişim.
14. İlk 3 temel yazı + 1 hesaplama şablonu (Google Sheets yeter).
15. 12 maddelik teslim edilebilirlik kontrol listesini geçir (`02-bulten`), sonra ilk 50 aboneye gönder.
16. Search Console + analitik + Core Web Vitals ölçümünü bağla.

### Ay 2–3 — büyüme
17. Haftada 1 bülten, iki haftada 1 yazı. X + LinkedIn dağıtımı.
18. 100 abonede referral programını aç.
19. Yeterli özgün içerik arşivi oluşunca AdSense'e başvur — **sadece manuel birimler**.
20. 90. günde: abone dönüşümü ve araç kullanımına göre ikinci çeyreği seç.

---

## 9. Sana sorulması gereken 5 soru

Sekiz turun tamamı aynı sorularda buluştu. Bunlar cevaplanmadan para harcanmamalı:

1. **Kod yazacak mısın?** (Astro'yu öğrenmeye açık mısın, yoksa hazır platform mu?)
   → Bu, tasarım hedefinin gerçekleşip gerçekleşmeyeceğini belirler.
2. **Aylık bütçe?** A: 0–10 USD · B: 25–60 USD · C: 100+ USD
3. **Haftada kaç saat?** (Gerçekçi taban: 8–10 saat/hafta)
4. **29 yaşından küçük müsün ve daha önce vergi mükellefiyetin oldu mu?**
   → Genç girişimci istisnası + prim desteği hakkı.
5. **Kişisel isminle mi, bağımsız yayın markasıyla mı?**
   → E-E-A-T, marka tescili ve İYS kaydını etkiler.

---

## 10. Turlar arası çözülen çelişkiler

| Konu | Çelişki | Karar |
|---|---|---|
| MailerLite ücretsiz sınırı | Tur A: ~1.000 abone · Tur B: 250 abone (Haziran 2026 değişikliği) | **Tur B** (kaynak linkli). Zaten Kit'in 10.000'i daha iyi. |
| Ücretli abonelik eşiği | Tur A: 500 abone · Tur F: 5.000 abone | **5.000** — erken paywall en sık hata. |
| Telif istisnası | Tur C, "GVK mükerrer 18" değil **GVK m.18** olduğunu düzeltti | m.18. Blog gelirinin tamamını telif saymak güvenli değil. |
| AdSense RPM | Tur D $1–4 · Tur F $0,5–3 · Tur G $0,5–2,5 | **$0,5–3** TR trafiği için. Web doğrulaması da uyumlu. |
| İYS zorunluluğu | Tur B "salt editoryal bülten kapsam dışı savunulabilir" dedi | **Web doğrulaması kazandı: zorunlu.** Reklam koyduğun an ticari amaç kesinleşir. |

---

> **Uyarı:** Bu kitap hukuki veya mali müşavirlik hizmeti değildir. `[DOĞRULA]` etiketli her
> rakam işlem anında birincil kaynaktan teyit edilmeli. Yayına ve ilk tahsilata başlamadan
> önce sermaye piyasası hukuku bilen bir avukat ve dijital gelir tecrübeli bir SMMM ile
> yazılı teyit al.
