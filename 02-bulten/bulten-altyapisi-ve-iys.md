# LANE B — Bülten Altyapısı, Teslim Edilebilirlik ve İYS Planı

Fiyatlar Ağustos 2026 düzeyinde, vergiler hariç aylık liste fiyatlarıdır; “1.000/10.000” hesabı haftada bir gönderim varsayar. Kur, vergi ve Türkiye kart kabulü değişebileceğinden işaretli kalemler satın alma ekranında **[DOĞRULA]**.

## 1. ESP seçimi

| ESP | Ücretsiz kota | 1.000 abone/ay | 10.000 abone/ay | Otomasyon ve API | Türkiye’den ödeme |
|---|---:|---:|---:|---|---|
| **Kit (ConvertKit)** | 10.000 abone, sınırsız gönderim | $0 | $0 | Ücretsiz planda 1 temel otomasyon; API iyi, gelişmiş otomasyon ücretli | USD kart **[DOĞRULA]** |
| **MailerLite** | 250 abone, 2.500 e-posta/ay | ~$39 Power | ~$129 Power | Güçlü görsel otomasyon, A/B, API iyi | USD/EUR kart **[DOĞRULA]** |
| **Buttondown** | 100 abone | ~$9 | ~$89 **[DOĞRULA]** | Markdown odaklı; API çok iyi; otomasyon +$29/ay | USD kart **[DOĞRULA]** |
| **Loops** | 1.000 kişi, 4.000 gönderim/ay | $0 | $99 | SaaS yaşam döngüsü otomasyonları ve API çok iyi | USD kart **[DOĞRULA]** |
| **Resend** | 1.000 pazarlama kontağı; ayrıca 3.000 işlemsel e-posta | $0 | $80 | Geliştirici deneyimi/API çok iyi; 10.000 otomasyon çalıştırması | USD kart **[DOĞRULA]** |
| **Amazon SES** | Yeni hesap kredileri dışında yok **[DOĞRULA]** | ~$0,64 | ~$6,40 | Sadece gönderim altyapısı; liste, editör ve otomasyon ayrıca kurulmalı | AWS’de USD kart |
| **Brevo** | 300 e-posta/gün; 100.000 kişi saklama | ~$9 | ~$25–35 **[DOĞRULA]** | Görsel otomasyon 2.000 kişiye kadar ücretsiz; REST API/SMTP güçlü | Kart veya PayPal |
| **beehiiv** | 2.500 abone, sınırsız gönderim | $0 | $43, yıllık ödeme | Scale planında otomasyon, A/B ve webhooks; Send API yalnız Max | USD kart **[DOĞRULA]** |
| **Ghost + Mailgun** | Mailgun 100 e-posta/gün | ~$21–27 | ~$41–47 | Ghost segmentasyonu temel; Ghost API güçlü, görsel pazarlama otomasyonu sınırlı | VPS ve Mailgun için USD kart |

Kit’in ücretsiz planı 10.000 aboneye kadar yalnızca bir temel otomasyon sunuyor; MailerLite’ın ücretsiz sınırı Haziran 2026’da 250 aboneye düşürüldü. Loops fiyatı 1.000 kişiye kadar $0, 5.000–10.000 aralığında $99; Resend’in pazarlama planı 10.000 kişide $80. [Kit](https://help.kit.com/en/articles/9053602-the-kit-newsletter-plan), [MailerLite](https://www.mailerlite.com/pricing), [Loops](https://loops.so/pricing), [Resend](https://resend.com/docs/knowledge-base/what-is-resend-pricing).

Amazon SES’in 2026 Essentials fiyatı yaklaşık $0,16/1.000 alıcıdır; maliyet avantajı ancak T2 kullanıcının abonelikten çıkma, bounce, şikâyet ve İYS senkronizasyonunu ayrıca kurmasıyla anlamlıdır. Ghost’un kendisi açık kaynaklıdır; haftalık toplu gönderim için Mailgun Basic 10.000 e-postada $15, Foundation 50.000 e-postada $35’tir. [AWS SES](https://aws.amazon.com/ses/), [Mailgun](https://www.mailgun.com/pricing/).

**KARAR:** A/T1 için **Kit Newsletter**, A/T2 için hazır liste yazılımıyla **Amazon SES**; B/T1 için **beehiiv Scale**, B/T2 için **Resend**; C/T1 için **Ghost(Pro) Publisher/Business**, C/T2 için **self-hosted Ghost + Mailgun** seç; kripto içeriğinde ödeme yapmadan önce ESP kabul politikasından yazılı onay al.

## 2. Domain kimlik doğrulama

DNS kayıtları alan adının satın alındığı yerde değil, yetkili nameserver’ın DNS panelinde—örneğin Cloudflare, Route 53 veya registrar DNS—eklenir.

1. `news.site.com` gönderim alt domainini ESP’de doğrula.
2. ESP’nin verdiği tek **SPF TXT** kaydını ekle; aynı hostname üzerinde iki SPF oluşturma ve 10 DNS lookup sınırını aşma.
3. ESP’nin verdiği selector’larla tercihen 2048 bit **DKIM CNAME/TXT** kayıtlarını ekle.
4. `_dmarc.news.site.com` için `v=DMARC1; p=none; rua=mailto:dmarc@site.com; adkim=s; aspf=s` yayımla.
5. Gün 1–14 `p=none`; raporlar temizse gün 15’te `p=quarantine; pct=25`, gün 22’de `pct=100`; gün 29’da `p=reject; pct=25`, gün 43’te `p=reject; pct=100` uygula.
6. ESP destekliyorsa `bounce.news.site.com` için CNAME ekleyerek **custom return-path/MAIL FROM** kullan; görünür From, DKIM ve SPF alanlarının DMARC ile hizalandığını test et.
7. MXToolbox, DMARC Analyzer veya dmarcian ile SPF/DKIM/DMARC sonucunu; Gmail Postmaster Tools ile itibarı izle.

BIMI teslimatı artıran bir kimlik doğrulama yöntemi değil, logo görüntüleme katmanıdır. DMARC’ın `quarantine/reject` ve `pct=100` olması, uygun SVG ve çoğu sağlayıcıda VMC/CMC gerekir; marka tescili ve 10.000+ abone öncesinde maliyetine değmez. [BIMI gereksinimleri](https://bimigroup.org/implementation-guide/).

**KARAR:** İlk günden SPF, DKIM, DMARC ve custom return-path kur; DMARC’ı altı haftada `reject` seviyesine çıkar, BIMI’yi ertele.

## 3. Gönderim domaini ve ısıtma

Görünür göndereni `Bülten Adı <bulten@news.site.com>`, return-path’i `bounce.news.site.com`, yanıt adresini gerçek kişi tarafından okunan `yanit@site.com` yap. `news.` pazarlama itibarını ana domain ve parola/ödeme gibi işlemsel e-postalardan ayırır; `mail.` kadar belirsiz değildir.

İçe aktarılan bir liste varsa ilk olarak en yakın zamanda onay vermiş veya tıklamış kişiler gönderilmelidir:

| Hafta | Azami aktif alıcı | Geçiş şartı |
|---:|---:|---|
| 1 | 50 | Hard bounce <%0,5; şikâyet 0 |
| 2 | 100 | Önceki gönderim temiz |
| 3 | 250 | SPF/DKIM/DMARC geçiyor |
| 4 | 500 | Şikâyet <%0,1 |
| 5 | 1.000 | Bounce toplamı <%2 |
| 6 | 2.000 | Hacim artışı en fazla 2 kat |
| 7 | 3.500 | Etkileşimli kişiler önce |
| 8 | 5.000 | Sorun yoksa tüm aktif liste |

Bu rakamlar hedef değil tavandır; organik olarak yalnız 30 abone varsa 30 kişiye gönderilir. 5.000 abone × haftalık gönderim yaklaşık 20.000 e-posta/aydır ve paylaşımlı IP için uygundur. Özel IP, düzenli en az ~100.000 e-posta/ay ve istikrarlı frekans oluşmadan itibarı zayıflatabilir; Mailgun da yaklaşık bu alt sınırı öneriyor.

**KARAR:** `news.site.com` ve paylaşımlı IP kullan; 5.000 aboneye kadar özel IP satın alma.

## 4. Gmail ve Yahoo uyumu

Gmail’de kişisel hesaplara günde 5.000’den fazla ileti gönderenler için SPF **ve** DKIM, en az `p=none` DMARC, TLS, PTR/rDNS, RFC 5322 biçimi ve DMARC hizalaması gerekir. Pazarlama iletileri hem gövdede görünür çıkış bağlantısı hem de şu başlıkları taşımalıdır:

```text
List-Unsubscribe: <https://site.com/unsubscribe/TOKEN>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

Gmail spam oranını <%0,10 hedefle; %0,30’a hiçbir zaman ulaşma. Yahoo’da da SPF/DKIM/DMARC, kolay tek tık çıkış ve düşük şikâyet oranı temel şarttır. Çıkış isteğini 48 saat içinde ESP ve İYS’ye yansıtmak, hem sağlayıcı kurallarındaki hem Türkiye’deki üç iş günlük sınırı karşılar. [Gmail gönderici kuralları](https://support.google.com/mail/answer/81126?hl=en).

**KARAR:** 5.000/gün eşiğini beklemeden toplu gönderici standardını uygula ve Gmail Postmaster Tools’u ilk gönderimden önce doğrula.

## 5. İYS ve 6563 sayılı Kanun

Bir bülten otomatik olarak ticari ileti değildir; amaç belirleyicidir. Tamamen ücretsiz, kişisel ve ürün/hizmet/marka tanıtımı içermeyen editoryal ileti kapsam dışında savunulabilir. Buna karşılık ücretli üyelik, danışmanlık, sponsor, affiliate bağlantı, kurs veya blog markasının tanınırlığını artırma amacı bulunan finans bülteni **ticari elektronik ileti** kabul edilmelidir. Muhafazakâr uygulama İYS kaydıdır.

6563 sayılı **Elektronik Ticaretin Düzenlenmesi Hakkında Kanun** ve **Ticari İletişim ve Ticari Elektronik İletiler Hakkında Yönetmelik** uyarınca:

- Bireysel alıcıdan gönderimden önce onay al; tacir/esnafta ön onay istisnası olsa da adresi İYS’ye kaydet ve ret sonrası gönderme.
- İYS hizmet sağlayıcı başvurusunu MERSİS yetkilisiyle yap; MERSİS yoksa İYS’nin MERSİS dışı başvuru yolunu kullan.
- Ticaret unvanından farklı bülten markası kullanılacaksa marka tescil belgesini yükle.
- E-posta, izin tarihi, kanal, alıcı tipi ve izin kaynağını web/CSV/API ile İYS’ye aktar.
- E-posta yoluyla “izin verir misiniz?” mesajı gönderme; onayı web formunda al.
- Her iletide gönderen kimliği ve ücretsiz çıkış yolu bulundur; retleri en geç üç iş gününde uygula ve kayıtları en az üç yıl sakla.
- Yurt dışı ESP kullanmak yükümlülüğü kaldırmaz; İYS, Türkiye dışındaki göndericilerin de Türkiye’deki alıcılara gönderimde kaydolması gerektiğini belirtiyor. [İYS SSS](https://iys.org.tr/iys/sss), [başvuru adımları](https://iys.org.tr/hizmet-saglayici/basvuru/nasil-yapilir).

İzinsiz gönderim 6563 m.12 kapsamında idari para cezası ve çok sayıda kişiye gönderimde on kata kadar artış riski taşır. Kanundaki baz 1.000–5.000 TL aralığı yıllık yeniden değerlemeyle yükseltildiğinden 2026 güncel tutarı Ticaret Bakanlığı ceza tebliğinden **[DOĞRULA]**.

**KARAR:** Bültenin ileride gelir üretmesi planlanıyorsa ilk ticari gönderimden önce işletme ve İYS kaydını tamamla; “şimdilik ücretsiz” gerekçesiyle muafiyet kullanma.

## 6. KVKK uygulaması

E-posta adresi kişisel veridir. Formda kısa katmanlı aydınlatma ve ayrı bağlantılı tam metin bulunmalı; veri sorumlusu, amaç, alıcılar, toplama yöntemi/hukuki sebep ve KVKK m.11 hakları açıklanmalıdır. Aydınlatma metni “kabul ettirilemez”; ticari ileti izni için işaretlenmemiş, ayrı kutu kullanılmalıdır. [KVKK aydınlatma ölçütleri](https://www.kvkk.gov.tr/Icerik/6765/AYDINLATMA-YUKUMLULUGUNUN-YERINE-GETIRILMESI-HAKKINDA-KAMUOYU-DUYURUSU).

**Double opt-in kanunen zorunlu değildir**, fakat onayın zamanını, IP’sini ve adres sahipliğini ispatladığı için uygulanmalıdır. Onay bağlantısı tıklanmadan kişi ESP’nin gönderim listesine ve İYS’ye “onaylı” aktarılmamalıdır.

Yurt dışı ESP veri işleyendir ve AB sunucusu dahi KVKK bakımından yurt dışıdır. Sürekli bülten operasyonunda tercih edilen yol, KVKK m.9’a uygun **veri sorumlusundan veri işleyene standart sözleşme** imzalamak ve beş iş günü içinde Kuruma bildirmektir; GDPR DPA/SCC tek başına Türk standart sözleşmesinin yerine geçmez. ESP’nin Türk standart sözleşmesini imzalayıp imzalamayacağını satış öncesi **[DOĞRULA]**. [Yurt dışına aktarım](https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim), [beş iş günü bildirimi](https://www.kvkk.gov.tr/Icerik/8043/Standart-Sozlesme-Bildirim-Modulu-Hakkinda-Kamuoyu-Duyurusu).

Solo kurucu; 50’den az çalışanı, 100 milyon TL’den düşük bilançosu ve özel nitelikli veri işlemeyi ana faaliyet yapmaması halinde VERBİS’ten muaftır; muafiyet diğer KVKK yükümlülüklerini kaldırmaz. [2025/1572 ve 2025/2393 kararları](https://www.kvkk.gov.tr/Icerik/8577/kisisel-verileri-koruma-kurulunun-04-09-2025-tarihli-ve-2025-1572-sayili-kararinin-uygulama-esaslarina-iliskin-kamuoyu-duyurusu).

**KARAR:** Double opt-in kullan; yurt dışı ESP ile Türk KVKK standart sözleşmesi imzalanamıyorsa o ESP’de canlı abone toplamaya başlama.

## 7. Liste hijyeni ve gönderim operasyonu

Hard bounce ve spam şikâyetini anında engelle; 30 günde üç soft bounce alanı çıkar. Satın alınmış, kazınmış, etkinlikten izinsiz alınmış ve `info@` gibi rol adreslerini ekleme. Son 180 günde tıklama, yanıt veya site oturumu olmayanlara tek yeniden-etkileşim mesajı gönder; yedi gün içinde tıklamayanı bastır. Apple Mail Privacy Protection otomatik piksel yüklediğinden açılma oranı karar KPI’ı değildir.

Haftalık genel finans bültenini Salı 10.00 TRT’de gönder. BIST açılışına hazırlık içeriğini 08.15, hafta değerlendirmesini Cuma 17.30 test et. En az 2.000 aktif abone oluşmadan küçük A/B farklarını anlamlı sayma. Ölç: teslim ≥%98, hard bounce <%0,5, şikâyet <%0,10, çıkış <%0,5, benzersiz tıklama oranı ve tıklamadan hedef dönüşüm; açılmayı yalnız yön gösterici metrik olarak tut.

**KARAR:** Ana KPI’ı benzersiz tıklama ve dönüşüm yap; 180 günlük tıklamasız kişileri düzenli olarak listeden çıkar.

## 8. İlk gönderimden önce 12 maddelik teknik kontrol listesi

- [ ] `news.site.com` doğrulandı.
- [ ] SPF tek kayıt ve geçerli.
- [ ] DKIM imzası geçerli.
- [ ] DMARC `p=none` ve raporlama adresi aktif.
- [ ] Custom return-path hizalı.
- [ ] Gmail Postmaster Tools doğrulandı.
- [ ] Görünür ve RFC 8058 tek tık çıkış çalışıyor.
- [ ] Bounce, complaint ve suppression webhooks etkin.
- [ ] İYS hizmet sağlayıcı/marka kaydı tamamlandı.
- [ ] Onay, ret ve ESP listesi senkronize edildi.
- [ ] KVKK aydınlatma, ayrı izin ve yurt dışı aktarım dayanağı tamamlandı.
- [ ] Gmail, Yahoo, Outlook ve Apple Mail testlerinde kimlik doğrulama ile tüm bağlantılar geçti.

**KARAR:** On iki kutunun tamamı işaretlenmeden ilk ticari bülteni gönderme.

## AÇIK SORULAR

1. Bütçe senaryosu A, B veya C’den hangisi?
2. Teknik seviye T1 mi T2 mi?
3. Seçilecek niş kripto dâhil hangi finans alanı?
4. Şahıs şirketi/MERSİS kaydı ve kullanılacak ticari unvan mevcut mu?
5. Bülten haftalık mı, günlük mü ve 12 aylık abone hedefi kaç?

**KARAR:** Önce bütçe, teknik seviye ve ticari statüyü netleştir; ESP sözleşmesini ancak ardından yap.

## İLK 5 AKSİYON

1. Bugün A/B/C bütçe ve T1/T2 teknik senaryosunu seçerek tek ESP’yi kısa listeye indir.
2. 48 saat içinde `news.site.com` için SPF, DKIM, DMARC ve return-path kayıtlarını test aracında dörtte dört geçir.
3. İlk form yayımlanmadan önce İYS başvurusunu başlatıp kullanılacak unvan veya marka belgesini yükle.
4. KVKK aydınlatma metni, ayrı ticari ileti izni ve double opt-in akışını beş farklı test adresiyle doğrula.
5. İlk 50 onaylı aboneye Salı 10.00 TRT’de gönderip 48 saat sonunda bounce, şikâyet ve benzersiz tıklama raporunu kaydet.

**KARAR:** İlk ölçülebilir hedef, hukuken kayıtlı ve teknik olarak doğrulanmış 50 double opt-in aboneye hatasız gönderimdir.
