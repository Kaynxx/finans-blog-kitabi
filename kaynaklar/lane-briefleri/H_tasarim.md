# ORTAK BAĞLAM

Kullanıcı: Türkiye'de yaşayan, tek kişilik (solo) kurucu. Türkçe içerik üretecek.
Hedef: FİNANS konulu blog sitesi + e-posta bülteni. Aşama: sıfırdan. Kitle = 0.
Proje GitHub'da açık (public) repo olarak tutulacak.
KULLANICININ AÇIK ÖNCELİĞİ: **TASARIM birinci sırada** ve tasarım "herkesin inceleyebileceği" şekilde açık olsun.
Ayrıca sitede reklam olacak (gelir için) ama tasarımı bozmayacak.

Bilinmeyenler — varsayım yapma, SENARYOLARA böl:
- Bütçe: (A) ~0-10 USD/ay, (B) ~25-60 USD/ay, (C) 100+ USD/ay
- Teknik seviye: (T1) kod yazmak istemiyor, (T2) kod yazabiliyor
- Niş belirsiz: kişisel finans / BIST / makro / kripto / girişim finansmanı

# ÇIKTI KURALLARI (kesin)
- Tamamen TÜRKÇE.
- Markdown, başlık hiyerarşisi, tablo kullan.
- Her ana bölümün sonunda **KARAR: <net öneri>** satırı — "duruma göre değişir" yasak.
- Somut ol: gerçek font adları, gerçek hex kodları, gerçek px/rem değerleri, gerçek kütüphane adları ve sürüm/paket boyutu.
- Emin olmadığın rakam/olguya **[DOĞRULA]** etiketi koy. UYDURMA.
- Sonunda "## AÇIK SORULAR" (max 5) ve "## İLK 5 AKSİYON" bölümleri.
- Hedef uzunluk 1800-2600 kelime. Dolgu yok.
- Sadece raporu stdout'a bas. Dosya oluşturma, komut çalıştırma.

# LANE H — TASARIM SİSTEMİ VE KAMUYA AÇIK TASARIM VİTRİNİ

## 1. Tasarım referansları ve konumlandırma
Gerçek finans yayınlarının tasarım dili — her birinden ne alınmalı, ne alınmamalı:
Bloomberg, Financial Times, The Economist, Stratechery, Money Stuff (Matt Levine), Axios, Morning Brew, WSJ, Our World in Data, Pudding.cool.
- "Ciddi / güvenilir finans" hissi hangi SOMUT tasarım kararlarından çıkar? (tipografi ağırlığı, boşluk, renk kısıtı, veri sunumu, görsel kullanmama cesareti)
- "Ucuz / spam finans sitesi" hissi hangi kararlardan çıkar? (stok görsel, yığın reklam, gradyan buton, abartılı vaat, karışık font)

## 2. Tipografi — Türkçe kritik
- TÜRKÇE KARAKTER DESTEĞİ ZORUNLU: ğ Ğ ı I İ ş Ş ö Ö ü Ü ç Ç. Bunları TAM destekleyen ücretsiz fontlar. En az 4 adet başlık+gövde eşleşmesi öner; her birinin TR karakter desteğini teyit et, emin değilsen [DOĞRULA] koy. Türkçe'ye özgü noktalı/noktasız i (I/ı, İ/i) problemine dikkat çek.
- Uzun okuma için: gövde punto (px/rem), satır yüksekliği, satır uzunluğu (karakter/satır), type scale oranı.
- Sayısal veri için: `font-variant-numeric: tabular-nums` neden şart; TR sayı formatı (binlik ayracı nokta, ondalık virgül), ₺ / $ / % gösterimi, `Intl.NumberFormat('tr-TR')` kullanımı.
- Variable font, `font-display: swap`, `preload`, subsetting — TR karakterler subset'ten düşerse ne olur.

## 3. Renk, tema, erişilebilirlik
- Kısıtlı palet önerisi: nötr zemin + 1 marka rengi + veri renkleri. Gerçek hex kodlarıyla ver.
- Artı/eksi (yükseliş/düşüş) için yeşil-kırmızı problemi: renk körlüğü, ve TR borsa ekranlarındaki renk konvansiyonu. Renk dışında ikinci bir sinyal (ok, işaret) zorunluluğu.
- Karanlık mod gerçekten gerekli mi? Veri grafiklerinde nasıl davranmalı.
- WCAG 2.2 AA: kontrast oranları (4.5:1 metin, 3:1 büyük metin/UI bileşeni), klavye navigasyonu, görünür odak halkası, tablo başlık ilişkilendirmesi (`scope`, `caption`), `prefers-reduced-motion`.
- Design token yapısı: CSS custom properties ile renk / boşluk / tipografi ölçeğinin tanımı. Somut bir token isimlendirme şeması öner.

## 4. Bileşen envanteri (finans blogu için)
Her biri için amaç + tasarım notu + durumlar (boş / yükleniyor / hata):
makale sayfası, makale kartı, arşiv listesi, bülten kayıt formu (satır içi + yapışkan + çıkış niyeti), yazar kartı ve E-E-A-T bloğu, **yasal uyarı/disclaimer bileşeni** (SPK riski nedeniyle her yatırım içeriğinde görünür olmalı — tasarımı nasıl olmalı ki hem görünsün hem okumayı bozmasın), veri kartı / istatistik bloğu, grafik konteyneri, karşılaştırma tablosu, hesaplama aracı (calculator) arayüzü, kaynak/atıf bloğu, güncelleme tarihi rozeti, **reklam slotu bileşeni** (sabit yükseklik, CLS'siz, "Reklam" etiketli), içindekiler (TOC), okuma ilerleme çubuğu, vurgu/alıntı kutusu.

## 5. Veri görselleştirme
- Kütüphane karşılaştırma tablosu: Recharts, Chart.js, ECharts, Observable Plot, D3, Lightweight Charts (TradingView), Nivo. Her biri için: paket boyutu (kB, gzip), öğrenme eğrisi, SSR uyumu, erişilebilirlik, finans grafiği yeteneği (mum, alan, sütun, çoklu eksen), lisans.
- Statik grafik (build-time SVG/PNG) vs interaktif grafik — SEO, performans ve bakım farkı.
- Grafik tasarım kuralları: eksen sıfırdan mı başlar, enflasyon düzeltmesi (TR için kritik — nominal grafik yanıltır), kaynak etiketi zorunluluğu, veri-mürekkep oranı, mobilde grafik davranışı.

## 6. "Herkesin incelemesi için" — kamuya açık tasarım vitrini
Kullanıcının bu isteğini karşılamanın yollarını karşılaştır ve NET BİR TANE SEÇ:
- Sitede `/tasarim` style guide rotası: tüm token'lar, tipografi ölçeği, renkler, bileşenler tek sayfada canlı
- **Storybook**: kurulum maliyeti, statik build alıp GitHub Pages / Vercel / Netlify'a yayınlama, Chromatic ile görsel regresyon testi
- Figma community dosyası olarak herkese açık paylaşım, Figma-kod senkronu
- Açık kaynak GitHub reposu + README'de tasarım gerekçesi (design rationale) + ekran görüntüleri + `CONTRIBUTING`/geri bildirim kanalı
Solo kurucu için en düşük bakım maliyeti / en yüksek fayda hangisi? GitHub reposu zaten açık olacağı için bunu nasıl değerlendirirsin?

## 7. Performans bütçesi ve doğrulama
Sayfa ağırlığı hedefi (kB), JS bütçesi, görsel formatı (AVIF/WebP), `srcset` ile responsive görsel, lazy loading. Core Web Vitals hedefleri ve REKLAMLA birlikte bunları tutturmanın gerçekçiliği — net rakam ver. Ölçüm araçları: Lighthouse, PageSpeed Insights, WebPageTest, Search Console CWV raporu (saha verisi vs lab verisi farkı).

## 8. Tasarımın reklamla barışması
Reklam bir gelir kalemi olacak. Reklamı tasarım sistemine "birinci sınıf bileşen" olarak nasıl dahil ederiz ki sonradan yapıştırılmış görünmesin? Slot boyut standartları (IAB boyutları), dikey ritim, maksimum yoğunluk, karanlık mod davranışı, mobil davranış, reklam yüklenmediğinde ne gösterilir.

Sonuç:
(a) somut bir design token seti taslağı — gerçek renk hex, boşluk ölçeği (px/rem), tipografi ölçeği değerleriyle
(b) "her zaman yap / asla yapma" tasarım kuralları listesi
(c) tasarım vitrini için tek net öneri ve gerekçesi
