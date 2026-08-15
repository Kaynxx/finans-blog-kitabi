# Finans Blogu ve E-Posta Bülteni İçin Platform Kararı

## 1. Platformların karşılaştırılması

Aşağıdaki maliyetler 2025–2026 liste fiyatı seviyesindedir; yıllık ödeme, abone sayısı, e-posta hacmi ve vergiye göre değişen rakamlar `~` ve `[DOĞRULA]` ile işaretlenmiştir.

| Platform | Başlangıç maliyeti | Gelir kesintisi | SEO / performans | Blog + bülten | Lock-in ve tasarım |
|---|---:|---:|---|---|---|
| **Substack** | $0; özel alan adı kurulumu yaklaşık $50 tek sefer `[DOĞRULA]` | Ücretli abonelikte %10 + Stripe masrafı | Orta; teknik SEO kontrolü sınırlı | Çok güçlü ve son derece kolay | Yüksek lock-in; tasarım ve veri modeli sınırlı |
| **beehiiv** | Ücretsiz plan ~2.500 abone; ücretli planlar ~$43/aydan başlıyor `[DOĞRULA]` | Platform payı genellikle %0; Stripe kesintisi ayrıca | Orta-iyi; newsletter büyüme araçları güçlü | Çok güçlü | Otomasyon, referral ve reklam ağı taşınamaz; tasarım orta |
| **Ghost Pro** | Starter ~$18/ay, Publisher ~$29/ay; aboneye göre artar `[DOĞRULA]` | %0 platform payı; Stripe ayrıca | Çok iyi; hızlı, temiz HTML, üyelik yerleşik | En dengeli bütünleşik çözüm | Ghost JSON ve üye CSV ihracı sayesinde orta-düşük lock-in |
| **Self-hosted Ghost** | VPS ~$5–15/ay + Mailgun kullanımı + alan adı | %0; ödeme sağlayıcısı ayrıca | Çok iyi | Yerleşik üyelik ve bülten; toplu gönderim için Mailgun gerekir | Düşük lock-in; bakım, yedekleme ve güvenlik kullanıcıda |
| **WordPress.com** | Personal ~$4–9/ay, Business ~$25/ay `[DOĞRULA]` | Ödeme özelliğinde plana bağlı ek kesinti olabilir `[DOĞRULA]` | İyi; eklenti erişimi plana bağlı | Yerleşik abonelik araçları var, fakat Ghost kadar tutarlı değil | Orta lock-in; WordPress dışa aktarımı mevcut |
| **Self-hosted WordPress** | Hosting ~$4–20/ay; Newsletter eklentisi ücretsiz veya premium ~€69/yıl `[DOĞRULA]` | Platform payı %0 | Doğru kurulumla çok iyi; eklenti şişmesi riski var | Newsletter, MailPoet veya harici ESP ile | Düşük lock-in; en geniş tema/eklenti özgürlüğü |
| **Astro/Hugo + ESP** | Cloudflare Pages $0; ESP $0–20/ay | Platform payı %0 | Mükemmel; statik üretim ve tam teknik kontrol | Ayrı sistemler; entegrasyon kurulmalı | En düşük lock-in; içerik Markdown ise taşınması çok kolay |
| **Next.js + ESP** | Vercel/Cloudflare başlangıçta $0; ticari planlar ~$20/aydan başlar | Platform payı %0 | Çok iyi, fakat yanlış istemci kodu performansı bozar | API ve webhook geliştirmesi gerekir | Düşük platform lock-in, fakat uygulama kodu bakım ister |
| **Medium** | Yayınlamak ücretsiz | Üyelik gelir modeli Medium kontrolünde | Alan adı ve teknik SEO kontrolü zayıf | Sahip olunan bülten altyapısı değildir | Yüksek platform bağımlılığı; ana yayın evi olmamalı |
| **Notion tabanlı site** | Notion + Super/Potion benzeri katman ~$10–30/ay | Sağlayıcıya göre | Orta-zayıf; yapılandırılmış veri ve performans sınırlı | Harici ESP gerekir | Bir ara katmana bağımlılık ve problemli içerik göçü |

ESP tarafında **MailerLite** ücretsiz planda yaklaşık 1.000 abone/12.000 e-posta, **Kit** ücretsiz planda yaklaşık 10.000 abone, **Resend** ücretsiz planda yaklaşık 3.000 e-posta/ay, **Buttondown** ise küçük listelerde ücretsiz veya ~$9/ay seviyesindedir `[DOĞRULA]`. **Loops** daha çok ürün e-postasına yöneliktir ve ücretli planı yaklaşık $49/aydan başlar `[DOĞRULA]`.

Türkiye merkezli **Euromsg** ve **Related Digital** kurumsal, teklif usulü ve yüksek hacim odaklıdır. **Verimor** yerel destek, toplu/işlemsel e-posta ve iletişim hizmetleri sunar; fakat bunların hiçbiri blog yayın platformu değildir. Sıfır aboneli bir solo kurucunun bunlarla başlaması gereksizdir. Yerel sağlayıcı ancak 10.000+ abone, kurum içi KVKK/IYS süreci veya Türkçe kurumsal destek ihtiyacında yeniden değerlendirilmelidir.

**KARAR: Kodsuz başlangıçta Ghost Pro, teknik başlangıçta Astro + Cloudflare Pages + MailerLite; Substack, Medium ve Notion ana yayın altyapısı olarak elensin.**

## 2. Blog ve bülten aynı sistemde mi olmalı?

Tek kaynak yaklaşımında makale bir kez CMS’de yazılır; web sayfası, RSS ve e-posta aynı kayıttan üretilir. Ghost bunu doğal olarak yapar. Yazının web sürümü kalıcı URL ve SEO değeri kazanırken e-posta sürümü aynı editörden gönderilir. Abonelik, segment ve gönderim arşivi de tek yerde kalır.

Ayrı sistemde ise site kanonik içerik kaynağı olmalıdır. Astro/WordPress üzerindeki tam yazı esas alınmalı; MailerLite veya Buttondown yalnızca e-posta sürümünü ve abone verisini tutmalıdır. İki tarafta birbirinden bağımsız tam metin düzenlemek sürüm uyuşmazlığına yol açar.

RSS-to-email, teknik entegrasyonu azaltır: MailerLite ve Buttondown RSS beslemesini belirli aralıklarla e-postaya çevirebilir. Bunun dezavantajı tasarım ve kişiselleştirme kontrolünün azalmasıdır. Finans içeriğinde daha iyi model, RSS ile otomatik taslak üretmek; konu satırı, giriş ve CTA’yı göndermeden önce elle düzenlemektir.

Abone sisteminde e-posta adresine ek olarak onay zamanı, kaynak, izin metni sürümü, etiketler ve abonelikten çıkma geçmişi saklanmalıdır. 6698 sayılı **KVKK**, 6563 sayılı **Elektronik Ticaretin Düzenlenmesi Hakkında Kanun**, **Ticari İletişim ve Ticari Elektronik İletiler Hakkında Yönetmelik** ve gerektiğinde **İYS** yükümlülükleri ayrıca incelenmelidir. Salt editoryal içerik ile tanıtım/affiliate içeren ileti aynı hukuki varsayımla ele alınmamalıdır `[DOĞRULA]`.

**KARAR: T1 senaryosunda Ghost ile tek sistem; T2 senaryosunda siteyi tek içerik kaynağı, ESP’yi yalnızca dağıtım ve abone sistemi yap.**

## 3. Alan adı, DNS, hosting ve kurumsal e-posta

Ana alan adı için ilk tercih kısa ve markalanabilir bir **.com** olmalıdır. Türkiye odağı güçlü ise aynı ismin **.com.tr** uzantısı da alınarak `.com` adresine yönlendirilmelidir. TRABİS sonrasında birçok `.com.tr` alan adı belgesiz, ilk gelen alır modeliyle kaydedilebilmektedir; güncel tahsis şartları `[DOĞRULA]`. `.net`, yalnızca `.com` alınamıyor ve marka başka biriyle karışmıyorsa kullanılmalıdır.

**Natro, Turhost ve İsimtescil** Türkçe destek, TL fatura ve `.tr` uzantılarında pratiktir. İlk yıl kampanyasına değil yenileme fiyatına bakılmalıdır; `.com/.com.tr` yıllık maliyeti sağlayıcıya göre kabaca ~500–1.500 TL olabilir `[DOĞRULA]`. **Cloudflare Registrar** `.com` için maliyet fiyatına yakın yenileme sunar; `.com.tr` desteği yoktur `[DOĞRULA]`. **Namecheap** kullanışlı bir uluslararası alternatiftir, fakat kur ve yabancı işlem maliyeti oluşur.

Kayıt şirketi neresi olursa olsun DNS’i Cloudflare’a taşımak; ücretsiz CDN, DNSSEC, temel WAF, bot kontrolü ve önbellekleme sağlar. Ghost Pro’da Cloudflare proxy ayarları dokümantasyona uygun yapılmalı; hatalı önbellekleme üyelik ve yönetim ekranlarını bozabilir.

`ad@marka.com` ve `editor@marka.com` gibi özel alan adlı posta fiilen gereklidir. Gönderim için `bulten.marka.com` veya ayrı bir gönderim alt alan adı kullanmak ana alan adının itibarını korur. SPF, DKIM ve DMARC kurulmalı; DMARC önce `p=none` ile izlenip sonra `quarantine` seviyesine yükseltilmelidir. Gelen posta için Zoho Mail yaklaşık $1–3/kullanıcı/ay, Google Workspace yaklaşık $7–8,40/kullanıcı/ay seviyesindedir `[DOĞRULA]`.

**KARAR: Ana marka `.com`, savunma kaydı `.com.tr`, DNS/CDN Cloudflare, gelen posta Zoho Mail; bülten gönderimi ayrı alt alan adı üzerinden yapılsın.**

## 4. Ücretli abonelik ve Türkiye’de ödeme sorunu

**Stripe Türkiye’de yerleşik şirketlere doğrudan hesap açmadığı için**, Substack, beehiiv ve Ghost’un yerleşik ücretli üyelikleri Türkiye şirketiyle doğrudan kullanılamaz. Yabancı şirket kurup desteklenen ülkede banka ve vergi altyapısı oluşturmak ayrı bir şirketleşme kararıdır; başlangıç varsayımı yapılmamalıdır.

| Seçenek | Tipik maliyet | Türkiye açısından değerlendirme |
|---|---:|---|
| **Paddle** | Yaklaşık %5 + $0,50 `[DOĞRULA]` | Merchant of Record; vergi tahsilatını üstlenir. Bülten/dijital içerik kabulü ön onaya bağlı olabilir |
| **Lemon Squeezy** | Yaklaşık %5 + $0,50; ek uluslararası ücretler olabilir | MoR; Türkiye’ye ödeme yöntemi ve newsletter kabulü başvuru öncesi doğrulanmalı `[DOĞRULA]` |
| **Gumroad** | Doğrudan satışta yaklaşık %10 + $0,50; Discover daha yüksek | Dijital ürün için kolay; yeni işlemlerde MoR modeli var, üyelik deneyimi sınırlı |
| **Polar** | Yaklaşık %4 + $0,40 `[DOĞRULA]` | MoR odaklı; Türkiye payout uygunluğu ve içerik üyeliği kabulü doğrulanmalı |
| **iyzico** | Sözleşme ve ciroya göre; ilan edilen oranlar değişken | Türkiye şirketi için güçlü; abonelik/tekrarlı ödeme entegrasyonu özel geliştirme gerektirebilir |
| **PayTR** | Teklif usulü | Yerel kartlar ve taksit avantajlı; CMS’ye hazır newsletter üyeliği değildir |
| **Shopier** | Yaklaşık %3–5 `[DOĞRULA]` | Linkle satış kolay; gerçek tekrarlı abonelik ve otomatik erişim kontrolü zayıf |
| **Papara** | Kurumsal sözleşmeye göre | Cüzdan/tahsilat aracı; düzenli bülten üyeliği için uygun API kapsamı `[DOĞRULA]` |
| **Patreon** | Yeni üreticilerde yaklaşık %10 + işlem/payout ücretleri `[DOĞRULA]` | Türkiye payout ve Payoneer seçenekleri doğrulanmalı; kullanıcı ilişkisi Patreon’da kalır |
| **Kreosus** | Komisyon ve ödeme şartları `[DOĞRULA]` | Türkiye odaklı destek avantajı; veri taşınabilirliği ve düzenli ödeme başarısı test edilmeli |

MoR, son müşteriye hukuken satıcı olur; KDV/satış vergisi hesaplama, tahsilat ve iadelerin önemli bölümünü yönetir. Buna karşılık daha yüksek komisyon, içerik kategorisi onayı ve hesaba bağımlılık getirir. Paddle ve Lemon Squeezy’nin temel odağı yazılım/dijital ürün olduğundan “ücretli finans bülteni” kabulü yazılı onay alınmadan varsayılmamalıdır.

İlk aşamada ücretsiz bülten kurulmalı; gelir sponsor, affiliate, rapor/e-kitap ve tek seferlik ürünle test edilmelidir. Ücretli üyelik ancak en az 500 ilgili abone veya 20 doğrulanmış ödeme niyeti oluşunca iyzico/PayTR destekli özel üyelik ya da onaylı MoR ile açılmalıdır.

**KARAR: Başlangıçta ücretsiz üyelik; ilk ücretli ürün için iyzico/PayTR, uluslararası dijital ürün için yazılı kabul alınmış Lemon Squeezy; Stripe tabanlı yerleşik aboneliğe güvenilmesin.**

## 5. Performans ve teknik SEO tabanı

Sayfalar Astro/Hugo’da statik, Ghost ve WordPress’te sunucu tarafında üretilmelidir. Next.js kullanılırsa makaleler SSG/ISR ile oluşturulmalı; gereksiz istemci JavaScript’i yüklenmemelidir.

Hedefler mobil 75. yüzdelikte **LCP ≤2,5 saniye**, **INP ≤200 ms**, **CLS ≤0,1** olmalıdır. WebP/AVIF görsel, en-boy ölçüsü, yerel veya iyi önbelleklenmiş font, kritik CSS ve CDN uygulanmalıdır.

Her yazıda özgün başlık, meta açıklaması, kanonik URL, Open Graph görseli, XML sitemap ve RSS bulunmalıdır. `Article`/`NewsArticle`, yayıncı için `Organization` ve ekmek kırıntıları için `BreadcrumbList` şeması kullanılmalıdır. `FAQPage` şeması yalnızca sayfada gerçek soru-cevap içeriği varsa eklenmeli; Google’ın zengin sonuç göstermesi garanti değildir. İçerik yalnızca Türkçe ise `hreflang` gerekmez; ileride İngilizce sürüm açılırsa `tr-TR`, `en` ve gerekirse `x-default` eklenir. AMP gerekli değildir.

Finans içeriğinde yazar biyografisi, kaynak tarihi, güncelleme tarihi, çıkar çatışması/affiliate açıklaması ve “yatırım tavsiyesi değildir” notu bulunmalıdır; bu not tek başına SPK kapsamındaki sorumlulukları ortadan kaldırmaz.

**KARAR: Astro veya Ghost’un server-rendered/statik çıktısı, ölçülen Core Web Vitals ve Article şeması zorunlu; AMP ve yalnız-Türkçe sitede hreflang kullanılmasın.**

## 6. Göç ve veri taşınabilirliği

En güvenli sıralama **Markdown/Astro → Ghost → WordPress → beehiiv/Substack → Medium/Notion** şeklindedir. Ghost içerikleri JSON, üyeleri CSV olarak dışa aktarabilir. WordPress WXR ihracı güçlüdür; ancak sayfa oluşturucu kısa kodları ve özel eklenti verileri sorun çıkarabilir. Substack ve beehiiv abone CSV’si ve içerik ihracı sunsa da referral kayıtları, otomasyonlar, anketler, analitik geçmişi ve tasarım bire bir taşınmaz. Medium ve Notion’dan alınan HTML/Markdown çoğu zaman görsel yolları, dipnotları ve kanonik yapıyı temizlemeyi gerektirir.

Her ay içerik, abone CSV’si ve izin kayıtlarının yedeği alınmalıdır. Göç sırasında aynı anda iki platformdan e-posta gönderilmemeli; SPF/DKIM değişiklikleri, suppression list ve abonelikten çıkan kullanıcılar mutlaka taşınmalıdır. Eski URL’ler yeni URL’lere bire bir `301` yönlendirilmelidir.

**KARAR: İçeriği taşınabilir Markdown veya Ghost JSON’da, aboneleri aylık CSV yedeğinde tut; Medium ve Notion yalnızca dağıtım kanalı olsun.**

## 7. Altı senaryolu kesin karar matrisi

| Bütçe / teknik seviye | T1 — Kod yazmak istemiyor | T2 — Kod yazabiliyor veya öğrenebilir |
|---|---|---|
| **A — ~$0–10/ay** | **WordPress.com Personal + yerleşik Newsletter + Cloudflare DNS + Zoho Mail Lite** | **Astro + Cloudflare Pages + MailerLite Free + Git tabanlı Markdown** |
| **B — ~$25–60/ay** | **Ghost Pro Publisher + Cloudflare DNS + Zoho Mail** | **Self-hosted Ghost + Hetzner/DO VPS + Mailgun + Cloudflare + Zoho Mail** |
| **C — $100+/ay** | **Ghost Pro Publisher + Google Workspace; kalan bütçe içerik/veri üretimine** | **Next.js SSG + Sanity CMS + Vercel Pro + MailerLite Advanced + Cloudflare DNS** |

C bütçesinde sıfır aboneli bir yayının sırf bütçe var diye Ghost Business veya pahalı enterprise ESP satın alması rasyonel değildir. Fazla bütçe BIST veri lisansı, editoryal araştırma, hukuk/KVKK kontrolü, özgün grafik ve dağıtıma ayrılmalıdır.

**KARAR: Varsayılan başlangıç T1 için Ghost Pro Publisher, T2 için Astro + Cloudflare Pages + MailerLite; diğer hücreler yalnızca belirtilen bütçe-teknik senaryosunda kullanılmalı.**

## AÇIK SORULAR

1. İlk 12 ayda ücretli abonelik mi, sponsor/affiliate mı öncelikli gelir modeli olacak?
2. Beş nişten hangisinde haftada en az iki özgün içerik üretme avantajınız var?
3. T1 mi T2 mi seçiyorsunuz ve aylık bütçe hangi A/B/C aralığında?
4. Şahıs şirketiniz mevcut mu; iyzico/PayTR ve faturalama açılabilir mi?
5. Yalnız Türkiye kitlesi mi hedefleniyor, yoksa ileride İngilizce yayın ihtimali var mı?

**KARAR: Platform satın alınmadan önce bu beş sorudan özellikle teknik seviye, bütçe ve gelir modeli kesinleştirilsin.**

## İLK 5 AKSİYON

1. İlk gün içinde T1/T2 ile A/B/C hücresini seçip matristeki tek yığını kesinleştirin.
2. Üç marka adı üretip `.com`, `.com.tr`, sosyal kullanıcı adı ve Türk Patent marka çakışmasını 48 saat içinde kontrol edin.
3. Seçilen alan adını alıp Cloudflare DNS, SPF, DKIM ve DMARC kurulumunu üç gün içinde tamamlayın.
4. Seçilen platformda ana sayfa, hakkımızda, gizlilik, çerez, iletişim ve yatırım riski açıklaması dahil altı temel sayfayı bir hafta içinde yayınlayın.
5. Bülteni açmadan önce seçilen nişte üç temel makale ve dört haftalık sekiz başlıklı yayın takvimini tamamlayın.

**KARAR: İlk ölçülebilir hedef, 7 gün içinde çalışan alan adı ve üç yayındaki makale; 30 gün içinde ilk 100 izinli abonedir.**
