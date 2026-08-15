# Doğrulanmış Olgular

Bu dosyadaki maddeler **bağımsız canlı web araştırmasıyla** teyit edildi. Araştırma
turlarının (lane) çıktısıyla çelişirse **bu dosya kazanır**.

Doğrulama tarihi: **15 Ağustos 2026**

---

## 1. İYS kaydı — bülten için fiilen zorunlu

E-posta bültenleri açıkça **"ticari elektronik ileti"** kapsamındadır. Yükümlülük
**vergi mükellefiyetine değil, iletinin ticari amacına** bağlıdır: vergi mükellefi
olmasanız bile tanıtım/pazarlama amacı varsa kanun sizi "hizmet sağlayıcı" sayar.

**Bu proje için sonuç: İYS zorunlu.** Sitede reklam olacağı ve blog markasının
tanınırlığını artırma amacı taşıdığı için "salt editoryal, ticari değil" savunması
gerçekçi değildir.

Operasyonel kurallar:

| Kural | Detay |
|---|---|
| Ön onay | Bireysel alıcıdan gönderim öncesi onay şart |
| Onay yükleme | Alındıktan sonra **3 iş günü** içinde İYS'ye |
| Kaydedilmemiş onay | **Geçersiz** sayılır |
| Gönderim öncesi | Alıcının İYS durumu kontrol edilmeli |
| Ret işleme | **3 iş günü** içinde İYS'ye yansıtılmalı |
| Ceza | İleti başına idari para cezası; çok sayıda alıcıda **10 kata kadar** artış |

Yurt dışı ESP kullanmak bu yükümlülüğü **kaldırmaz** — İYS, Türkiye'deki alıcılara
gönderim yapan yurt dışı göndericileri de kapsar.

Kaynak: [iys.org.tr](https://iys.org.tr) · 6563 sayılı Elektronik Ticaretin
Düzenlenmesi Hakkında Kanun · Ticari İletişim ve Ticari Elektronik İletiler Hakkında Yönetmelik

---

## 2. Stripe Türkiye'de yok

Ağustos 2026 itibarıyla Stripe'ın **desteklenen ülkeler listesinde Türkiye yok**.
Türk vergi kimliği veya Türkiye'de kayıtlı şirketle doğrudan Stripe hesabı açılamaz.
Türkiye pazarına gireceğine dair resmî duyuru da yok.

**Bu proje için sonuç:** Substack / beehiiv / Ghost'un **yerleşik ücretli abonelik**
özellikleri Türkiye şirketiyle doğrudan kullanılamaz. Platform seçilirken "ücretli
abonelik var" özelliği Türkiye'den çalışmayacağı için hesaba katılmamalı.

Alternatifler:

| Yol | Not |
|---|---|
| iyzico / PayTR | Yerel kart, TL tahsilat. Şirket/vergi kaydı gerekir |
| Shopier | İlk dijital ürün testi için en hızlısı; gerçek abonelik zayıf |
| Paddle / Lemon Squeezy / Polar | Merchant of Record — vergiyi üstlenir. **TR payout ve "finans bülteni" kategori kabulü başvuru öncesi yazılı teyit edilmeli** |
| ABD LLC / Estonya e-Residency + Stripe | Ayrı bir şirketleşme kararı. Başlangıç varsayımı yapılmamalı |

⚠️ VPN ile konum gizleyerek Stripe hesabı açmak, bakiyeyle birlikte **kalıcı hesap
kapatmayla** sonuçlanır. Yapılmamalı.

---

## 3. SPK — yetkisiz yatırım danışmanlığı ve manipülasyon

6362 sayılı Sermaye Piyasası Kanunu'na göre yatırım danışmanlığı **SPK izni** gerektirir.

| Fiil | Yaptırım |
|---|---|
| İzinsiz sermaye piyasası faaliyeti (SPKn **m.109**) | **2–5 yıl hapis** + adli para cezası |
| Piyasa dolandırıcılığı / manipülasyon (SPKn **m.107**) | **3–5 yıl hapis** + adli para cezası |
| İdari tedbir | Site ve sosyal medya hesabına **erişim engeli**, idari para cezası |

**Kritik:** "Yatırım tavsiyesi değildir" (YTD) notu bir **kalkan değildir**. Değerlendirmede
paylaşımın içeriği, amacı ve yatırımcı üzerindeki etkisi esas alınır.

Sınırı aşıran unsurlar: kişiye özel yönlendirme, sürekli sinyal paylaşımı, "kesin kazanç"
vaadi, ücretli VIP grup/üyelik karşılığı tavsiye.

Görece güvenli alan: genel piyasa yorumu, eğitim içeriği, finansal haber.

Kaynak: [spk.gov.tr — İzinsiz sermaye piyasası faaliyetleri](https://spk.gov.tr/yatirimcilar/izinsiz-sermaye-piyasasi-faaliyetleri) ·
[SPK sosyal medyadan hisse pazarlanmasına ilişkin duyuru](https://spk.gov.tr/duyurular/basin-duyurulari/2023/sosyal-medya-uzerinden-hisse-pazarlanmasina-iliskin-duyuru)

---

## 4. Vergi — GVK mükerrer 20/B içerik üreticiliği istisnası

**2026 hasılat sınırı: 5.300.000 TL**

| Unsur | Detay |
|---|---|
| Kapsam | İnternet ortamında metin/görüntü/ses/video paylaşan sosyal içerik üreticileri — **blog yazarları dahil** |
| Vergileme | Türkiye'de açılan **münhasır hesaba** yatan brüt hasılattan banka **%15 stopaj** keser |
| Nitelik | Bu stopaj **nihai vergilemedir** — sınır aşılmazsa yıllık beyan yok |
| Sınır aşılırsa | İstisna kaybedilir; genel hükümler, yıllık beyanname, defter tutma yükümlülüğü başlar |
| En kritik şart | Hasılatın **tamamı** o özel hesaptan tahsil edilmeli. Başka hesaba gelen tek ödeme **şart ihlali** = geriye dönük cezalı tarhiyat |

Kaynak: GVK mükerrer 20/B · [GİB özelge](https://gib.gov.tr/mevzuat/kanun/433/ozelge/21333)

---

## 5. AdSense — Türkiye finans trafiğinin gerçeği

- Finans, AdSense'te **en yüksek getirili kategorilerden**; genel içeriğin birkaç katı.
- Ancak globalde konuşulan **12–25 USD RPM ABD/Avrupa trafiğine aittir.**
- **Türkiye trafiği yerel reklamveren bütçesiyle sınırlıdır** ve bu rakamların çok altında kalır.
  TR genel içerikte 1.000 gösterim için ~19–72 TL aralığı raporlanıyor; finans bunun birkaç katı.
- Sabit ücret yoktur; gelir açık artırmayla belirlenir. RPM = (kazanç / sayfa görüntüleme) × 1000.

**Bu proje için sonuç:** Reklam, düşük trafikte anlamlı gelir üretmez. Erken aşamada reklamı
**gelir kalemi değil, altyapı hazırlığı** olarak planlayın; asıl gelir bülten sponsorluğudur.

---

## 6. Bülten platformları — güncel fiyat yapısı

| Platform | Ücretsiz katman | Gelir payı | Not |
|---|---|---|---|
| Substack | Sınırsız | **%10** + Stripe | TR'de Stripe yok → ücretli abonelik çalışmaz |
| beehiiv | ~2.500 abone | %0 | Scale ~43–49 USD/ay |
| Ghost Pro | 14 gün deneme | %0 | ~15–29 USD/ay (yıllık); self-host ücretsiz |

**Geçiş noktası:** aylık abonelik geliri ~500 USD'yi aştığında Substack'in %10'u,
beehiiv/Ghost'un sabit ücretinden pahalı hale gelir.

⚠️ Araştırma turları arasında çelişki vardı: MailerLite ücretsiz sınırı için biri
~1.000 abone, diğeri 250 abone dedi. **Kaynak linki veren tur (250) esas alınmalı, ancak
kayıt anında birincil kaynaktan teyit edilmeli.** Kit (ConvertKit) ücretsiz katmanı
10.000 aboneye kadar (tek temel otomasyonla) en cömert seçenek görünüyor.
