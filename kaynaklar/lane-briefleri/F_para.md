
# ORTAK BAĞLAM (tüm lane'ler için aynı)

Kullanıcı: Türkiye'de yaşayan, tek kişilik (solo) bir kurucu. Türkçe içerik üretecek.
Hedef: FİNANS konulu bir blog sitesi + buna bağlı bir E-POSTA BÜLTENİ kurmak.
Aşama: SIFIRDAN başlıyor. Henüz platform, niş, altyapı seçilmedi. Kitle = 0 abone.
İstenen çıktı: uygulanabilir, karar verdirici bir ARAŞTIRMA/AKSİYON planı — genel geçer öğüt DEĞİL.

Bilinmeyenler (varsayım yapma, bunun yerine SENARYOLARA böl):
- Bütçe: 3 senaryo altında değerlendir → (A) ~0-10 USD/ay, (B) ~25-60 USD/ay, (C) 100+ USD/ay
- Teknik seviye: 2 senaryo → (T1) kod yazmak istemiyor, (T2) kod yazabiliyor/öğrenebilir
- Niş henüz belirsiz: kişisel finans / borsa-BIST / makro-ekonomi / kripto / girişim-finansmanı arasında

# ÇIKTI KURALLARI (kesin)
- Tamamen TÜRKÇE yaz.
- Markdown. Başlık hiyerarşisi kullan. Tablo kullanmaktan çekinme.
- Her ana bölümün sonunda **KARAR: <net öneri>** satırı olsun — "duruma göre değişir" yasak, senaryoya bağla.
- Somut ol: gerçek ürün adları, gerçek fiyatlar (2025-2026 seviyesi, tahminse "~" koy), gerçek mevzuat/kanun adları, gerçek araç isimleri.
- Emin olmadığın rakam/olguya "[DOĞRULA]" etiketi koy. Uydurma.
- Sonunda "## AÇIK SORULAR" bölümü: kullanıcıya sorulması gereken max 5 soru.
- Sonunda "## İLK 5 AKSİYON" bölümü: sırayla yapılacak, her biri 1 cümle, ölçülebilir.
- Uzunluk hedefi: 1200-2000 kelime. Dolgu yok, her cümle bilgi taşısın.
- Sadece raporu yaz. Dosya oluşturma, kod çalıştırma, komut çalıştırma. Sadece stdout'a markdown rapor bas.


# LANE F — MONETİZASYON, BİRİM EKONOMİ VE ÖLÇÜM

Görevin: bu işin nasıl para kazanacağını sayılarla modelleyen plan.

Kapsanacaklar:
1. Gelir modelleri, her biri için: gereken abone/trafik eşiği, TR'de gerçekçi birim fiyat, kurulum zorluğu, mevzuat riski, kitleyi yakma riski:
   - Bülten sponsorluğu (TR'de gerçekçi CPM aralığı, sponsor kim olur: aracı kurumlar, fintech'ler, bankalar, kripto borsaları, eğitim şirketleri, SaaS)
   - Görüntülü reklam (Google AdSense TR RPM'i gerçekçi olarak nedir, Ezoic/Mediavine/Raptive eşikleri ve TR trafiğinin değeri)
   - Affiliate: TR'de yatırım/finans affiliate programları (aracı kurum hesap açtırma, kripto borsası referans, banka kredi kartı, sigorta karşılaştırma, kitap/eğitim). Komisyon aralıkları. Mevzuat/etik açıklama zorunluluğu.
   - Ücretli abonelik (paywall): fiyatlandırma (TL mi USD mi), ücretsiz/ücretli içerik ayrımı, dönüşüm oranı gerçekçi beklentisi (%1-5 tartışması), churn
   - Dijital ürün: e-kitap, Excel/Notion şablon, kurs, topluluk
   - Danışmanlık/eğitim — SPK riski uyarısı ile
   - İş ilanı panosu, dizin, veri ürünü
2. Türkiye'de tahsilat gerçeği: Stripe yok. Her gelir modeli için hangi ödeme altyapısı çalışır (Paddle, Lemon Squeezy, Gumroad, Polar, iyzico, PayTR, Shopier, Patreon, Kreosus, doğrudan havale/EFT). Komisyon, döviz bozdurma, yurt dışı gelir için hizmet ihracı faturası.
3. Birim ekonomi modeli: 3 senaryoda (1.000 / 10.000 / 50.000 abone) aylık gelir-gider tablosu kur. Giderler: platform, ESP (abone başına artan), domain, araçlar, muhasebe, vergi, tasarım/stok görsel. Net kâr çıkar.
4. Hangi gelir modeli hangi aşamada açılmalı — aşama kapıları (ör. "sponsorluk satmaya X abonede başla").
5. Ölçüm ve analitik yığını: Google Analytics 4 mü Plausible/Umami mi (KVKK ve çerez banner'ı açısından fark), Google Search Console, ESP analitiği, UTM disiplini, basit bir gösterge paneli (Google Sheets/Looker Studio) nasıl kurulur.
6. Takip edilecek KPI seti ve gerçekçi kıyas değerleri: abone büyüme oranı, açılma oranı (Apple MPP çarpıtması!), tıklama oranı (CTR gerçek KPI), churn, e-posta başına gelir (RPE/EPM), organik trafik, abone edinme maliyeti, LTV.
7. Sık yapılan monetizasyon hataları: erken paywall, alakasız sponsor, aşırı affiliate, ölçülmeyen liste, tek gelir kaynağına bağımlılık.

Sonuç: 0-6 ay / 6-18 ay / 18+ ay için üç aşamalı gelir yol haritası ve her aşamanın çıkış kriteri.
