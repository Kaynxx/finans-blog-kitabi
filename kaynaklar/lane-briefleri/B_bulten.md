
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


# LANE B — BÜLTEN ALTYAPISI, TESLİMEDİLEBİLİRLİK (DELIVERABILITY) VE İYS

Görevin: e-posta bülteninin teknik olarak "gerçekten gelen kutusuna düşmesini" sağlayacak operasyonel plan.

Kapsanacaklar:
1. ESP seçimi (sadece e-posta gönderim katmanı): Kit(ConvertKit), MailerLite, Buttondown, Loops, Resend, Amazon SES, Brevo, beehiiv, Ghost+Mailgun. Her biri için: ücretsiz kota, 1.000 / 10.000 abonede aylık maliyet, otomasyon yeteneği, API kalitesi, TR'den ödeme yapılabilirliği.
2. Domain kimlik doğrulama — adım adım: SPF, DKIM, DMARC (p=none → quarantine → reject yükseltme takvimi), custom return-path, BIMI (gerekli mi?). DNS kayıtlarının nereye ekleneceği.
3. Gönderim domaini stratejisi: ana domainden mi yoksa alt domainden mi (mail.site.com / news.site.com) göndermeli, neden.
4. IP/domain ısıtma (warm-up): 0 abonden 5.000'e çıkarken haftalık gönderim rampası tablosu. Paylaşımlı IP vs özel IP ne zaman.
5. Gmail/Yahoo 2024 toplu gönderici kuralları (bulk sender requirements): tek tıkla abonelikten çıkma (List-Unsubscribe: One-Click), spam şikâyet oranı <%0.3 eşiği, DMARC zorunluluğu. Bunlara uyum kontrol listesi.
6. TÜRKİYE'YE ÖZEL ZORUNLULUK — İYS (İleti Yönetim Sistemi): ticari elektronik ileti göndermek için İYS kaydı zorunlu mu, bülten "ticari elektronik ileti" sayılır mı, hangi durumda muaf, kayıt süreci, marka kaydı, onay yükleme, ceza riski. 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun ve Ticari İletişim Yönetmeliği bağlamında açıkla. Yurt dışı ESP kullanmak bu yükümlülüğü kaldırır mı?
7. KVKK açısından: açık rıza metni, aydınlatma metni, çift onay (double opt-in) zorunlu mu, veri işleyen olarak yurt dışı ESP kullanımı ve yurt dışına veri aktarımı (standart sözleşme / taahhütname / yeterlilik kararı) sorunu, VERBİS kaydı gerekir mi.
8. Liste hijyeni: bounce yönetimi, sunset politikası, re-engagement kampanyası, spam tuzakları.
9. Bülten operasyonu: gönderim günü/saati (TR kitlesi için), konu satırı testi, A/B, ölçülecek metrikler (açılma oranının Apple MPP sonrası güvenilmezliği dahil), tıklama oranı gerçek KPI.

Sonuç: "İlk gönderimden önce tamamlanması gereken 12 maddelik teknik kontrol listesi" ver.
