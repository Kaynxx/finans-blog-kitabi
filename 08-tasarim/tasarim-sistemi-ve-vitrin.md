# FİNANS BLOGU İÇİN TASARIM SİSTEMİ VE KAMUYA AÇIK TASARIM VİTRİNİ

## 1. Tasarım referansları ve konumlandırma

Finans yayınında güven, “kurumsal mavi” kullanmaktan çok; tutarlı tipografi, kontrollü yoğunluk, kaynak şeffaflığı ve veriyi abartmadan sunmakla oluşur.

| Referans | Alınmalı | Alınmamalı |
|---|---|---|
| Bloomberg | Yoğun fakat hizalı veri tabloları, monospace/tabular rakamlar, yüksek bilgi yoğunluğu | Siyah-turuncu agresif terminal estetiğini doğrudan kopyalamak |
| Financial Times | Sıcak kâğıt zemini, serif başlıklar, sakin grafikler, güçlü editoryal hiyerarşi | Çok sütunlu masaüstü düzenini mobilde sürdürmek |
| The Economist | Kısa ve iddialı başlıklar, tek vurgu rengi, grafiklerde disiplin | Fazla kapalı/paywall odaklı kullanıcı yolculuğu |
| Stratechery | Metni ürünün merkezine koymak, geniş okuma alanı, az dekorasyon | Her sayfayı uzun ve görselsiz bir metin duvarına çevirmek |
| Money Stuff | Güçlü yazar sesi, bülten merkezli yapı, sade bağlantılar | Çok uzun paragrafları ve sınırlı görsel hiyerarşiyi aynen almak |
| Axios | “Smart Brevity”, taranabilir ara başlıklar, özet kutuları | Her paragrafı kart/kutu içine almak |
| Morning Brew | Samimi dil, güçlü bülten CTA’sı, açıklayıcı illüstrasyon | Emoji, parlak renk ve sponsor alanlarını aşırı çoğaltmak |
| WSJ | Haber güvenilirliği, kaynak ve tarih görünürlüğü, veri tabloları | Ağır navigasyon ve sıkışık kurumsal kabuk |
| Our World in Data | Kaynağı grafiğin parçası yapmak, veri indirme/inceleme seçenekleri | Her içerikte araştırma paneli kadar ayrıntı sunmak |
| Pudding.cool | Hikâye anlatan etkileşimli grafikler, açıklamalı veri görselleştirme | Her makaleyi pahalı bir “scrollytelling” projesine çevirmek |

Önerilen konumlandırma: **Financial Times’ın editoryal sakinliği + Our World in Data’nın kaynak disiplini + Axios’un taranabilirliği**. Ana sayfa bir finans portalı gibi yanıp sönmemeli; güvenilir, bağımsız ve açıklayıcı bir yayın gibi görünmelidir.

“Ciddi finans” hissini üreten somut kararlar:

- Başlıklarda 600–700, gövdede 400 ağırlık; her yerde kalın metin kullanmamak.
- Makale gövdesini `68ch`, ana içerik kolonunu yaklaşık `720px` ile sınırlamak.
- Nötr zemin, tek marka rengi ve işlevsel veri renkleri kullanmak.
- Grafiklerde kaynak, dönem, birim ve güncelleme tarihini görünür göstermek.
- Gereksiz kapak görseli yerine güçlü başlık ve veri özeti kullanabilmek.
- Reklam, bülten ve içerik alanlarını açıkça etiketlemek.
- “Kesin kazanç”, “kaçırmayın”, “şimdi al” gibi vaatlerden kaçınmak.

Ucuz/spam hissi oluşturanlar: takım elbiseli stok fotoğraflar, altın para yığınları, neon gradyanlar, üçten fazla font, sürekli kayan ticker’lar, aynı ekranda çok sayıda reklam, sahte sayaçlar, kırmızı ünlem rozetleri ve kaynağı belirsiz grafiklerdir.

| Senaryo | Uygulama |
|---|---|
| A + T1 | Hazır yayın platformu/tema üzerinde tokenlara mümkün olduğunca yaklaş; özel grafik yerine statik SVG kullan |
| A + T2 | Astro veya Next.js tabanlı açık repo; CSS custom properties ve MDX içerik |
| B + T1 | Tasarımcıdan tek seferlik temel sistem ve şablon al; devamını görsel editörle yürüt |
| B + T2 | Özel frontend, otomatik görsel testler ve veri bileşenleri |
| C + T1/T2 | Marka tasarımı, erişilebilirlik denetimi ve kritik veri hikâyeleri için profesyonel destek |

Niş ne olursa olsun kabuk aynı kalabilir; BIST’te fiyat tabloları, makroda grafikler, kişisel finansta hesaplayıcılar, kriptoda risk blokları, girişim finansmanında karşılaştırma tabloları öne çıkarılır.

**KARAR: Yayını “sakin, kaynaklı ve veri odaklı” konumlandır; FT + OWID + Axios sentezini temel al.**

## 2. Tipografi — Türkçe kritik

Önerilen ücretsiz eşleşmeler:

| Başlık | Gövde/UI | Lisans | Türkçe durumu | Karakter |
|---|---|---|---|---|
| Source Serif 4 | Inter | SIL OFL | Latin Extended kapsamında Türkçe destekli | Editoryal ve çağdaş |
| IBM Plex Serif | IBM Plex Sans | SIL OFL | Türkçe glifler destekli | Teknik ve kurumsal |
| Newsreader | Manrope | SIL OFL | Türkçe desteği mevcut; seçilen dosya/subset ayrıca sınanmalı | Daha özgün, dergi hissi |
| Literata | Source Sans 3 | SIL OFL | Türkçe glifler destekli | Uzun okumada güçlü |

Her sürüm değişikliğinde şu gerçek metin görsel regresyon testine girmelidir: **“IĞDIR, İstanbul, ılık öğüş, Şirket, çözüldü — 1.234.567,89 ₺”**. Özellikle `I/ı` ile `İ/i` eşleşmesi İngilizce dönüşüm kurallarıyla bozulabilir. JavaScript’te kullanıcıya gösterilen metin dönüşümlerinde `toLocaleUpperCase('tr-TR')` ve `toLocaleLowerCase('tr-TR')` kullanılmalıdır.

Varsayılan ölçek:

- Gövde: `18px / 1.125rem`, satır yüksekliği `1.70`.
- Mobil gövde: `17px / 1.0625rem`, satır yüksekliği `1.65`.
- Küçük metin: `14px`, meta bilgi: `13px`.
- Başlık ölçeği: `1.25` Major Third.
- H1: `48px/1.08`; mobil `36px/1.12`.
- H2: `32px/1.18`; H3: `25px/1.25`; H4: `20px/1.35`.
- Makale satır uzunluğu: ideal `60–72ch`, maksimum `75ch`.

Fiyat, oran ve tablolar için şu kural zorunludur:

```css
.data-number {
  font-variant-numeric: tabular-nums lining-nums;
}
```

`tabular-nums`, her rakamı aynı genişlikte tutar; fiyatlar güncellendiğinde sütunların oynamasını ve karşılaştırmanın zorlaşmasını engeller. Biçimlendirme elle yapılmamalıdır:

```js
new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY'
}).format(1234567.89) // 1.234.567,89 ₺
```

Yüzdede işaretle değer arasında tarayıcı/locale çıktısı esas alınmalı; pozitif değişim ayrıca `+%2,40`, negatif değişim `−%1,15` olarak açıkça işaretlenmelidir. Dolar verisinde para birimi belirsizse yalnız `$` yerine `USD` gösterilmelidir.

Variable fontlar istek sayısını azaltır; fakat tüm eksenleri içeren dosya bazen statik iki dosyadan daha büyük olabilir. Yalnız kullanılan ağırlıklar veya gerekli eksenler alınmalıdır. Kritik gövde fontu WOFF2 olarak preload edilebilir; tüm font ailesini preload etmek gereksiz bant genişliği tüketir. `font-display: swap` kullanılmalıdır.

Subsetting yapılırken yalnız `latin` seçilirse Türkçe gliflerin düşme riski vardır. `latin-ext` korunmalı veya gerekli Unicode aralıkları açıkça üretilmelidir. Eksik glif, başka fonttan gelir ve özellikle `ğ`, `İ`, `ı`, `ş` karakterlerinde satırın görsel ritmini bozar.

**KARAR: Ana eşleşme Source Serif 4 + Inter; gövde 18px/1.70, genişlik 68ch ve tüm veri alanlarında tabular rakamlar olsun.**

## 3. Renk, tema ve erişilebilirlik

Önerilen açık tema:

| Rol | Renk |
|---|---|
| Sayfa zemini | `#F7F4ED` |
| Yüzey/kart | `#FFFFFF` |
| Ana metin | `#171717` |
| İkincil metin | `#5B5B57` |
| İnce sınır | `#D8D4CA` |
| Marka/bağlantı | `#0B5CAD` |
| Pozitif | `#087A55` |
| Negatif | `#B42318` |
| Uyarı | `#8A5A00` |
| Grafik mavisi | `#2F6FEB` |
| Grafik moru | `#7A52C7` |
| Grafik turuncusu | `#C65D09` |

Renk kombinasyonları üretimde otomatik kontrast testinden geçirilmelidir; özellikle küçük renkli metinler için gerçek font ağırlığıyla doğrulama gerekir.

Türkiye’de de borsa ekranlarında yeşil genellikle yükselişi, kırmızı düşüşü ifade eder. Ancak bu ikili tek sinyal olamaz:

- Pozitif: `▲ +%2,40` ve yeşil.
- Negatif: `▼ −%1,15` ve kırmızı.
- Değişmedi: `— %0,00` ve nötr gri.
- Grafik serilerinde çizgi deseni, doğrudan etiket veya farklı işaretçi şekilleri kullanılmalı.

WCAG 2.2 AA asgari hedefleri: normal metinde `4.5:1`, büyük metin ve anlamlı UI sınırlarında `3:1`; tüm kontroller klavyeyle erişilebilir; odak halkası en az `2px solid #0B5CAD` ve `2px` offset olmalıdır. Tablolarda görünür `caption`, sütunlarda `<th scope="col">`, satır başlıklarında `<th scope="row">` kullanılmalıdır. Hareketler `prefers-reduced-motion: reduce` altında kapanmalı; ilerleme çubuğu içerik atlamasına neden olmamalıdır.

Karanlık mod sıfır kitleli yayında öncelik değildir. İkinci tema; grafik, reklam, kod ve görsel QA yükünü neredeyse ikiye çıkarır. İleride eklendiğinde grafikler CSS `invert()` ile çevrilmemeli; ayrı grid, eksen, metin ve seri tokenları kullanmalıdır.

Token şeması:

```css
:root {
  --color-bg-page: #F7F4ED;
  --color-bg-surface: #FFFFFF;
  --color-text-primary: #171717;
  --color-text-secondary: #5B5B57;
  --color-border-subtle: #D8D4CA;
  --color-brand-primary: #0B5CAD;
  --color-data-positive: #087A55;
  --color-data-negative: #B42318;
  --color-data-warning: #8A5A00;

  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-24: 6rem;    /* 96px */

  --font-family-display: "Source Serif 4", Georgia, serif;
  --font-family-body: Inter, Arial, sans-serif;
  --font-size-body: 1.125rem;
  --font-size-sm: 0.875rem;
  --font-size-h3: 1.5625rem;
  --font-size-h2: 2rem;
  --font-size-h1: 3rem;
  --line-height-body: 1.7;

  --radius-sm: 4px;
  --radius-md: 8px;
  --shadow-raised: 0 8px 24px rgb(23 23 23 / 8%);
  --content-reading: 68ch;
  --content-wide: 1200px;
}
```

**KARAR: Açık temayla başla; renk anlamını daima işaret, metin veya şekille tekrarla ve karanlık modu lansman sonrasına bırak.**

## 4. Finans blogu bileşen envanteri

| Bileşen | Amaç ve tasarım | Boş / yükleniyor / hata |
|---|---|---|
| Makale sayfası | Başlık, özet, yazar, tarih, güncelleme, kaynak ve disclaimer | İçerik yoksa 404; iskelet yalnız dinamik veride |
| Makale kartı | Başlık, kategori, tarih, 1–2 satır özet; görsel zorunlu değil | Eksik görselde boş çerçeve gösterme |
| Arşiv listesi | Yıl/kategori filtresi, kompakt satırlar | Sonuç yok mesajı; filtreyi sıfırlama düğmesi |
| Bülten formu | E-posta + açık değer önerisi + gizlilik bağlantısı | Gönderiliyor, başarı, geçersiz adres, servis hatası |
| Yapışkan/çıkış formu | Masaüstünde ölçülü tekrar | Mobilde çıkış niyeti kullanma; kapatma tercihini sakla |
| Yazar ve E-E-A-T | Kısa özgeçmiş, uzmanlık, editoryal politika | Doğrulanmamış unvan üretme |
| Yasal uyarı | Yatırım içeriğinde giriş özetinden sonra kısa, sonda ayrıntılı | Metin yoksa içerik yayınlanmasın |
| Veri kartı | Değer, dönem, değişim, birim, kaynak | `—` + “veri yok”; eski veriyi güncelmiş gibi gösterme |
| Grafik konteyneri | Başlık, açıklama, grafik, kaynak, veri tarihi | Skeleton, erişilebilir veri tablosu, tekrar dene |
| Karşılaştırma tablosu | Sabit başlık, yatay mobil kaydırma | Boş sütunları gizle; hata açıklaması göster |
| Hesaplayıcı | Etiketli girdiler, varsayımlar, sonuç ve metodoloji | Girdi hatasını alan yanında açıkla |
| Kaynak/atıf bloğu | Birincil kaynak, erişim tarihi, yöntem | Kırık bağlantıyı işaretle |
| Güncelleme rozeti | “Güncellendi: 16 Ağustos 2026” | İlk yayında yalnız yayın tarihi |
| Reklam slotu | Ayrılmış sabit alan, `Reklam` etiketi | Yüklenmezse alanı kontrollü kapat veya kurum içi CTA göster |
| TOC | H2/H3 yapısı, aktif bölüm | Üçten az başlıkta gösterme |
| Okuma ilerlemesi | İnce, pasif gösterge | JS kapalıysa yok; işlev kaybı olmaz |
| Alıntı/vurgu | Ana çıkarım veya tanım | Dekoratif alıntı üretme |

Disclaimer modal veya agresif kırmızı alarm olmamalıdır. `#FFF8E6` zemin, `1px #D9B56D` sınır, `16px` metin ve “Bilgilendirme” başlığı uygundur. Kısa taslak: “Bu içerik genel bilgilendirme amaçlıdır; kişisel yatırım tavsiyesi değildir.” Kesin metin ve yerleşim SPK mevzuatı açısından hukuk uzmanına doğrulatılmalıdır **[DOĞRULA]**.

**KARAR: Önce makale, bülten, disclaimer, veri kartı, grafik, kaynak ve reklam slotunu üret; yayın şablonu bu bileşenler olmadan tamamlanmış sayılmasın.**

## 5. Veri görselleştirme

Paket boyutları import biçimi, tree-shaking ve adaptörlere göre değişir; aşağıdakiler üretim build’inde Bundlephobia veya gerçek bundle analiziyle doğrulanmalıdır.

| Kütüphane | Sürüm / yaklaşık gzip | Eğri | SSR | Erişilebilirlik | Finans yeteneği | Lisans |
|---|---:|---|---|---|---|---|
| Recharts | `2.15.x`, 45–60 kB **[DOĞRULA]** | Kolay | React SSR mümkün | Ek açıklama/tablo gerekir | Alan, sütun, çoklu eksen; yerleşik mum zayıf | MIT |
| Chart.js | `4.4.x`, 65–75 kB **[DOĞRULA]** | Kolay | Canvas nedeniyle istemci ağırlıklı | Alternatif tablo gerekir | Çizgi/sütun güçlü; mum eklenti ister | MIT |
| ECharts | `5.6.x`, modüler 120–200 kB; tam paket daha büyük **[DOĞRULA]** | Orta | SVG renderer ile mümkün | ARIA desteği var, yine denetlenmeli | Mum, hacim, zoom, çoklu eksen güçlü | Apache-2.0 |
| Observable Plot | `0.6.x`, 50–65 kB **[DOĞRULA]** | Orta | SVG/DOM uyumlu | SVG etiketleri eklenebilir | Açıklayıcı istatistik grafikleri güçlü | ISC |
| D3 | `7.9.x`, tam paket 90–100 kB **[DOĞRULA]** | Zor | Evet | Tamamen geliştirici sorumluluğu | Her şey yapılabilir | ISC |
| Lightweight Charts | `5.x`, 45–55 kB **[DOĞRULA]** | Orta | İstemci entegrasyonu gerekir | Ek tablo/açıklama gerekir | Mum, fiyat, hacim çok güçlü | Apache-2.0 |
| Nivo | `0.99.x`, bileşene göre 70–160 kB **[DOĞRULA]** | Orta | SVG bileşenleri SSR | Bazı yardımcılar var; denetim gerekir | Genel grafikler iyi, mum zayıf | MIT |

Statik SVG, temel makalelerde ilk tercih olmalıdır: indekslenebilir metin, düşük JS, kolay paylaşım ve uzun ömür sağlar. İnteraktif grafik yalnız yakınlaştırma, seri seçimi veya okuyucunun dönem değiştirmesi gerçekten anlam katıyorsa kullanılmalıdır. PNG sadece sosyal paylaşım/geri dönüş formatıdır; ana web grafiği olmamalıdır.

Kurallar:

- Sütun grafiklerinde eksen normalde sıfırdan başlamalıdır; çizgi grafiğinde kırpma yapılırsa açıkça belirtilmelidir.
- Nominal TL grafiklerinin yanında reel/enflasyondan arındırılmış görünüm veya açık uyarı bulunmalıdır.
- Kaynak, dönem, birim ve güncelleme tarihi her grafikte zorunludur.
- 3D grafik, gölge, gereksiz grid ve dekoratif ikon kullanılmamalıdır.
- Mobilde grafik en az `320px` alana uyarlanmalı; 12’den fazla eksen etiketi seyreltilmelidir.
- Grafik altında erişilebilir HTML veri tablosu veya veri özeti bulunmalıdır.

**KARAR: Makalelerde build-time SVG; standart interaktif grafiklerde ECharts; yalnız BIST mum grafiği gerektiğinde Lightweight Charts kullan.**

## 6. Kamuya açık tasarım vitrini

| Seçenek | Fayda | Bakım maliyeti | Sorun |
|---|---|---:|---|
| `/tasarim` rotası | Gerçek üretim token ve bileşenlerini canlı gösterir | Düşük | Test senaryoları elle disipline edilmelidir |
| Storybook | Çok sayıda durum, dokümantasyon ve izolasyon | Orta-yüksek | Ayrı yapılandırma, bağımlılık ve yayın hattı |
| Chromatic | Görsel regresyon ve inceleme | Ücret/kota riski | Solo ve sıfır trafikte erken optimizasyon |
| Figma Community | Tasarım keşfi ve paylaşımı güçlü | Orta | Kodla zamanla ayrışabilir |
| GitHub README | Gerekçeler, ekran görüntüleri, katkı kanalı | Çok düşük | Canlı bileşen incelemesi sağlamaz |

Net seçim: üretim uygulamasındaki `/tasarim` rotası. Tokenlar, font testi, tüm renk kombinasyonları, düğmeler, form durumları, disclaimer, grafik, tablo ve reklam placeholder’ı aynı koddan render edilmelidir. Böylece vitrin ile gerçek site arasında senkronizasyon problemi oluşmaz.

Açık GitHub reposu bunu tamamlar: README’de tasarım ilkeleri, `/tasarim` bağlantısı, ekran görüntüleri ve karar kayıtları bulunmalı; `CONTRIBUTING.md` erişilebilirlik hatası ve tasarım geri bildirimi için şablon sunmalıdır. Storybook ancak bileşen sayısı yaklaşık 30’u geçtiğinde veya ikinci geliştirici katıldığında değerlendirilmelidir.

**KARAR: Tek kamu vitrini olarak üretim sitesinde `/tasarim` rotasını seç; GitHub’ı gerekçe ve katkı katmanı olarak kullan.**

## 7. Performans bütçesi ve doğrulama

Reklam hariç ilk yük hedefi:

| Kaynak | Gzip/transfer bütçesi |
|---|---:|
| HTML | ≤ 40 kB |
| Kritik + ertelenmiş CSS | ≤ 60 kB |
| İlk rota JavaScript | ≤ 120 kB |
| Fontlar | ≤ 100 kB |
| İlk ekran görseli | ≤ 200 kB |
| Toplam yayın kökeni | ≤ 600 kB |

Görseller AVIF birincil, WebP geri dönüşlü; doğru `width`/`height`, `srcset` ve `sizes` ile sunulmalıdır. İlk LCP görseli lazy-load edilmemeli; ekran altı görsellerde `loading="lazy"` kullanılmalıdır. Reklam SDK’sı ve teklif zinciri toplamı ayrıca yüzlerce kilobayt hatta megabayt ölçeğine çıkabilir **[DOĞRULA]**; bu nedenle yayın kodu ile üçüncü taraf maliyeti ayrı raporlanmalıdır.

Saha verisinde 75. yüzdelik hedefleri:

- LCP: `≤2,5 saniye`
- INP: `≤200 ms`
- CLS: `≤0,10`
- TTFB iç hedefi: `≤0,8 saniye`
- Lighthouse mobil: reklamsız `≥90`, reklamlı testte `≥80`

Reklamla bu hedefler gerçekçidir; ancak slot yüksekliği önceden ayrılmaz, reklam üst alana yerleştirilir veya çoklu açık artırma scriptleri ana thread’i işgal ederse sürdürülemez.

Lighthouse ve WebPageTest laboratuvar teşhisidir. PageSpeed Insights hem lab hem mevcutsa CrUX saha verisi gösterir. Search Console CWV raporu gerçek kullanıcı gruplarını ve yaklaşık 28 günlük pencereyi yansıtır **[DOĞRULA]**; düşük trafikte veri oluşmayabilir.

**KARAR: Reklam hariç 600 kB, ilk rota JS’sinde 120 kB ve saha verisinde LCP 2,5 s / INP 200 ms / CLS 0,10 bütçesini yayın kapısı yap.**

## 8. Tasarımın reklamla barışması

Reklam, sonradan eklenen iframe değil; tokenları, placeholder’ı, hata davranışı ve ölçüm bütçesi olan bir bileşen olmalıdır.

Desteklenecek temel slotlar:

- Masaüstü yatay: `728×90`, geniş ekranda `970×250`.
- İçerik içi: `300×250` veya `336×280`.
- Mobil: `320×100`; `320×50` ancak zorunluysa.
- Masaüstü yan kolon: `300×600`.

Bunlar yaygın IAB boyutlarıdır; kullanılacak reklam ağının güncel kuralları doğrulanmalıdır **[DOĞRULA]**.

Her slotta üstte `12px`, harf aralığı `0.06em` olan “REKLAM” etiketi bulunmalı. Slot boyutu yüklemeden önce ayrılmalı; responsive değişimde yalnız tanımlı breakpoint’lerde boyut değiştirilmelidir. Reklam yüklenmezse 1 saniye sonra ani çökme yapılmamalı; alan sayfa ilk render’ında ayrılmışsa kontrollü biçimde küçültülmeli veya aynı ölçüde bülten/kurum içi içerik gösterilmelidir.

Yoğunluk kuralı:

- İlk `600px` içinde reklam yok.
- Makalede yaklaşık her `800px` editoryal akıştan sonra en fazla bir slot.
- Makale başına en fazla üç içerik içi reklam.
- Masaüstünde ek olarak en fazla bir yan kolon slotu.
- Mobil lansmanda yapışkan alt reklam yok.
- Disclaimer, grafik başlığı veya tablo satırlarının arasına reklam sokulmaz.

Karanlık mod daha sonra gelirse reklam iframe’i değiştirilemeyebilir; slot çevresi nötr yüzeyde tutulmalı ve reklamın renk şeması taklit edilmemelidir.

**KARAR: İlk 600px’i reklamsız bırak; sabit boyutlu, etiketli slotlarla makale başına en fazla üç içerik içi reklam kullan.**

## HER ZAMAN YAP / ASLA YAPMA

| Her zaman yap | Asla yapma |
|---|---|
| Kaynak, birim, dönem ve güncelleme tarihi göster | Kaynaksız fiyat veya grafik yayımlama |
| Metin gövdesini 68ch civarında tut | Masaüstünde ekran boyunca uzanan paragraf kullanma |
| Türkçe glifleri gerçek içerikle test et | Yalnız “Lorem ipsum” ile font onaylama |
| Renk anlamını ok/işaret/metinle tekrarla | Artış ve düşüşü yalnız yeşil/kırmızıyla anlatma |
| Reklam alanının ölçüsünü önceden ayır | Reklam yüklenince içeriği aşağı itme |
| Yatırım içeriğinde görünür disclaimer kullan | Uyarıyı yalnız footer’a saklama |
| Görselleri AVIF/WebP ve responsive sun | Dekoratif stok görseli zorunlu kılma |
| Bir ana marka rengi kullan | Neon gradyan ve çok renkli CTA kullanma |
| Grafik altında erişilebilir özet sun | Canvas grafiği tek bilgi kaynağı yapma |
| Tasarım kararlarını `/tasarim` ve README’de açıkla | Figma ile kodun sessizce ayrışmasına izin verme |

**KARAR: Güven, kaynak ve okunabilirlik estetik tercihlerden önce gelen değişmez tasarım kuralları olsun.**

## AÇIK SORULAR

1. İlk yayın nişi hangisi: kişisel finans, BIST, makro, kripto veya girişim finansmanı?
2. Teknik yol T1 mi T2 mi?
3. Aylık bütçe A, B veya C’den hangisi?
4. İlk altı ayda reklam ağı mı doğrudan sponsorluk mu hedefleniyor?
5. Editoryal ton daha kurumsal mı, kişisel/yazar merkezli mi olacak?

**KARAR: İlk çözülmesi gereken soru niştir; diğer ürün ve bileşen öncelikleri onun ardından kesinleştirilsin.**

## İLK 5 AKSİYON

1. Source Serif 4 + Inter ile tek makale sayfası ve Türkçe glif testini oluştur.
2. Yukarıdaki renk, boşluk ve tipografi tokenlarını üretim CSS’ine ekle.
3. Makale, disclaimer, kaynak, veri kartı, bülten ve reklam slotu bileşenlerini hazırla.
4. Aynı bileşenleri tüm durumlarıyla gösteren kamuya açık `/tasarim` rotasını yayınla.
5. Lighthouse/WebPageTest bütçelerini CI kontrolüne bağla; reklamlı ve reklamsız sonuçları ayrı ölç.

**KARAR: İlk teslimat, canlı bir makale şablonu ile aynı kodu kullanan `/tasarim` vitrini olsun.**
