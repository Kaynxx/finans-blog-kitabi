
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


# LANE A — PLATFORM & TEKNİK YIĞIN KARARI

Görevin: "Bu blogu neyin üstüne kurayım?" sorusunu kesin olarak cevaplayan bir karar dokümanı yaz.

Kapsanacaklar:
1. Adayları karşılaştır — her biri için: aylık maliyet, gelir payı kesintisi, SEO gücü, blog+bülten entegrasyonu, Türkçe/UTF-8 ve TR domain uyumu, kilitlenme (lock-in) ve göç (migration) riski, tasarım özgürlüğü:
   - Substack
   - beehiiv
   - Ghost (Ghost Pro managed vs self-hosted)
   - WordPress (WP.com vs self-hosted + Newsletter eklentisi)
   - Statik site (Astro / Next.js / Hugo) + ayrı ESP (Buttondown, Resend, Kit/ConvertKit, MailerLite, Loops)
   - Medium / Notion-tabanlı çözümler (neden eleneceğini de yaz)
   - Türkiye yerel alternatifleri varsa (ör. Euromsg, Related Digital, Verimor) — sadece bülten tarafı için
2. "Blog + bülten aynı platformda mı, ayrı mı?" — tek kaynak (single source of truth) tartışması. RSS-to-email köprüleri.
3. Domain & hosting: .com vs .com.tr vs .net; TR'de domain kayıt (Natro, Turhost, İsimtescil) vs uluslararası (Cloudflare Registrar, Namecheap). Cloudflare kullanımı. E-posta için özel domain (kurumsal mail) gerekliliği.
4. Ödeme/abonelik altyapısı — KRİTİK: Stripe Türkiye'de doğrudan hesap açmıyor. Bu, Substack/beehiiv/Ghost'ta ÜCRETLİ abonelik almayı nasıl etkiler? Alternatifler: Paddle, Lemon Squeezy, Gumroad, Polar, iyzico, PayTR, Shopier, Papara, Patreon, Kreosus. Merchant of Record modelinin avantajı. Her birinin TR'den kullanılabilirliği ve komisyonu.
5. Performans/SEO teknik temeli: Core Web Vitals, sunucu tarafı render, sitemap, schema.org (Article, FAQPage, Organization), hreflang gerekli mi, AMP gereksiz mi.
6. Göç yolu: yanlış seçim yapılırsa hangi platformdan hangisine geçmek kolay/zor. Veri taşınabilirliği (abone listesi export, içerik export).

Sonuç: 3 bütçe × 2 teknik seviye = 6 hücreli bir karar matrisi tablosu ver, her hücrede TEK bir önerilen yığın olsun.
