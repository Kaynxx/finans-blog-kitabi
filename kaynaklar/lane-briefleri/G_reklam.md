# ORTAK BAĞLAM

Kullanıcı: Türkiye'de yaşayan, tek kişilik (solo) kurucu. Türkçe içerik üretecek.
Hedef: FİNANS konulu blog sitesi + e-posta bülteni. Aşama: sıfırdan. Kitle = 0.
Proje GitHub'da açık (public) repo olarak tutulacak.
KULLANICININ AÇIK ÖNCELİĞİ: **TASARIM birinci sırada.** Reklam koyacak ama tasarımı bozmayacak.

Bilinmeyenler — varsayım yapma, SENARYOLARA böl:
- Bütçe: (A) ~0-10 USD/ay, (B) ~25-60 USD/ay, (C) 100+ USD/ay
- Teknik seviye: (T1) kod yazmak istemiyor, (T2) kod yazabiliyor
- Niş belirsiz: kişisel finans / BIST / makro / kripto / girişim finansmanı

# ÇIKTI KURALLARI (kesin)
- Tamamen TÜRKÇE.
- Markdown, başlık hiyerarşisi, tablo kullan.
- Her ana bölümün sonunda **KARAR: <net öneri>** satırı — "duruma göre değişir" yasak, senaryoya bağla.
- Somut ol: gerçek ürün adları, gerçek fiyat/eşik, gerçek API endpoint ve fonksiyon adları, gerçek mevzuat adı.
- Emin olmadığın rakam/olguya **[DOĞRULA]** etiketi koy. UYDURMA.
- Sonunda "## AÇIK SORULAR" (max 5) ve "## İLK 5 AKSİYON" bölümleri.
- Hedef uzunluk 1800-2600 kelime. Dolgu yok.
- Sadece raporu stdout'a bas. Dosya oluşturma, komut çalıştırma.

# LANE G — REKLAM ENTEGRASYONU, AD TECH API'LERİ VE TEKNİK YERLEŞİM

Görevin: "Reklamı teknik olarak siteye nasıl koyarım, hangi API/SDK ile, tasarımı bozmadan?" sorusunun tam cevabı.

## 1. Reklam ağları — kabul eşikleri ve entegrasyon şekli
Her biri için: minimum trafik eşiği, başvuru-onay süreci, TR yayıncısını kabul ediyor mu, gelir paylaşımı, entegrasyon yöntemi (script/API/eklenti), tasarım kontrolü ne kadar:
- Google AdSense — yeni sitede onay kriterleri, "düşük değerli içerik" reddi neden olur, kaç yazı gerekir, onay ne kadar sürer
- Google Ad Manager (ücretsiz sürüm) — AdSense'ten farkı, ne zaman geçilir
- Ezoic, Mediavine (ve giriş seviyesi programı), Raptive/AdThrive, Setupad, Snigel, Newor Media
- Türkiye yerel reklam ağları / SSP'leri — emin olmadığın ismi YAZMA, [DOĞRULA] koy
- Doğrudan sponsorluk satışı (ağsız, fatura ile)

## 2. TEKNİK ENTEGRASYON — API ve kod seviyesi (EN DETAYLI BÖLÜM BU OLMALI)
- **AdSense**: `adsbygoogle.js` script'i, ad unit kodu, Auto Ads vs Manuel Ad Units. Auto Ads tasarımı neden bozar, manuel niçin tercih edilmeli.
- **AdSense Management API v2**: NE İŞE YARAR, ne işe YARAMAZ. KRİTİK AYRIM — bu API reklam SUNMAZ, yalnızca raporlama/hesap yönetimi verir. Kullanıcı "API ile reklam koyacağım" sanıyor olabilir; bunu açıkça düzelt. Endpoint'ler, OAuth 2.0 akışı, kota, "raporu çekip kendi panelimde göstereyim" senaryosu.
- **Google Publisher Tag (GPT)**: `googletag.cmd.push`, `defineSlot`, `addService`, `display()`, `refresh()`, Single Request Architecture, lazy loading (`fetchMarginPercent`, `renderMarginPercent`, `mobileScaling`), viewability ölçümü.
- **Prebid.js / header bidding**: hangi trafik eşiğinde anlamlı hale gelir, mimarisi, `pbjs.requestBids`, timeout ayarı, sayfa hızına maliyeti. Küçük siteye gereksiz mi? Net cevap ver.
- **React / Next.js / Astro'da reklam yerleştirme**: script yükleme stratejisi (`next/script` strategy=afterInteractive vs lazyOnload), client-only bileşen, SPA rota değişiminde slot yenileme (`refresh()`), hydration çakışması, `useEffect` içinde `googletag` çağırma kalıbı, `React.StrictMode` çift-render tuzağı. Örnek bileşen mimarisi tarif et (kod bloğu yazabilirsin).
- **ads.txt ve sellers.json**: ne olduğu, nereye konur (`/ads.txt` kök dizin), doldurulmazsa gelir kaybı neden olur, satır formatı örneği.

## 3. TASARIMI BOZMAMA — kritik bölüm
- **CLS (Cumulative Layout Shift) sıfırlama**: slot için önceden yer ayırma (`min-height` + `aspect-ratio` konteyner), boş slot fallback'i, "reklam gelmezse çöken layout" problemi.
- **LCP / INP etkisi**: third-party script'in ana thread'i bloklaması, `async`/`defer`, third-party script bütçesi, Core Web Vitals eşikleri (LCP<2,5s, INP<200ms, CLS<0,1) ve reklamla bunları tutturmanın gerçekçiliği. Net konuş: reklam koyunca Lighthouse skoru ne kadar düşer.
- **Reklam yoğunluğu politikası**: Better Ads Standards / Coalition for Better Ads'ın yasakladığı formatlar (tam sayfa interstitial, otomatik sesli video, geri sayımlı reklam, büyük yapışkan reklam). İçerik-reklam oranı eşiği.
- **Estetik yerleşim kalıpları**: in-article kaç paragrafta bir, yapışkan sidebar, makale sonu, liste araları. En yüksek viewability ile en az rahatsızlık dengesi nerede.
- **Reklamı markaya uydurma**: native/uyumlu stil, "Reklam" etiketi zorunluluğu (TR mevzuatı: örtülü reklam yasağı, Reklam Kurulu), karanlık mod uyumu, tipografi ritmini bozmama.
- **Bülten CTA'sı ile reklamın çatışması**: aynı ekranda ikisi olursa abone dönüşümü düşer. Öncelik sıralaması ne olmalı.

## 4. Onay, gizlilik, mevzuat katmanı
- **Google Consent Mode v2**: `gtag('consent','default',...)` ve `update` çağrıları, sinyaller (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`), basic vs advanced mod.
- **IAB TCF v2.2** ve CMP seçimi: Google sertifikalı CMP'ler, Cookiebot / Osano / Didomi / Google'ın kendi CMP'si, ücretsiz seçenekler ve limitleri.
- Türkiye AB'de değil — TCF/GDPR zorunlu mu? KVKK Çerez Rehberi ne diyor: açık rıza olmadan reklam çerezi konabilir mi, banner'da "Reddet" butonu "Kabul et" ile aynı belirginlikte olmak zorunda mı.
- Reklam Kurulu / Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği: örtülü reklam yasağı, sponsorlu içeriğin etiketlenmesi, finans reklamlarına özel kısıtlar.

## 5. AdSense ödeme ve vergi (Türkiye)
Ödeme eşiği, ödeme yöntemi (TR banka havalesi/EFT), para birimi, W-8BEN vergi formu neden istenir ve doldurulmazsa ne olur, gelirin GVK mükerrer 20/B kapsamında %15 stopajla vergilendirilmesi ve "münhasır banka hesabı" şartıyla ilişkisi.

## 6. Gerçekçi gelir beklentisi
10.000 / 50.000 / 200.000 aylık sayfa görüntülemede TR finans trafiği için RPM aralığı ve aylık gelir tahmini tablosu. TR trafiğinin ABD trafiğine göre RPM farkını net söyle. Reklam hangi noktada bülten sponsorluğundan daha kötü / daha iyi bir gelir kalemi olur — sayıyla karşılaştır.

Sonuç: "0-10k / 10k-50k / 50k+ aylık trafik" için üç aşamalı reklam yol haritası + **"tasarımı korumak için 10 kural"** listesi.
