
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


# LANE C — TÜRKİYE HUKUKU, SPK UYUMU VE VERGİ

Görevin: bu blog+bülten işinin Türkiye'de yasal olarak nasıl kurulacağını ve hangi çizgilerin aşılmaması gerektiğini anlatan risk dokümanı.

ÖNEMLİ: Sen avukat/mali müşavir değilsin. Raporun başına ve sonuna bunu net yaz, ama YİNE DE somut, işlem yapılabilir bilgi ver — "bir uzmana danışın" deyip geçme.

Kapsanacaklar:
1. SPK (Sermaye Piyasası Kurulu) SINIRI — en kritik başlık:
   - "Yatırım danışmanlığı" 6362 sayılı Sermaye Piyasası Kanunu'na göre yetki belgesi gerektiren bir faaliyet. Blog/bülten yazmak ne zaman bu sınırı aşar?
   - "Genel yatırım tavsiyesi" ile "kişiye özel yatırım danışmanlığı" farkı. Yönetmeliğin genel yatırım tavsiyesi için getirdiği şartlar (tavsiyeyi verenin kimliği, çıkar çatışması açıklaması, dayanak, tarih).
   - Belirli hisse/kripto adı vermek, "al/sat" demek, hedef fiyat yayınlamak: risk seviyeleri.
   - Ücretli bülten satmak riski nasıl değiştirir? (bedel karşılığı tavsiye = daha yüksek risk)
   - Zorunlu çekince (disclaimer) metninde bulunması gerekenler — örnek metin yaz.
   - Manipülasyon/piyasa dolandırıcılığı riski: kendi pozisyonunu açıklamama (front-running), "pump" iddiası. SPK'nın sosyal medya/finfluencer yaptırımlarına dair bilinen uygulama.
   - Kripto varlıklar için ayrı rejim: 7518 sayılı kanun sonrası kripto varlık hizmet sağlayıcı düzenlemesi ve içerik üreticisine etkisi.
2. Şirketleşme: şahıs şirketi mi limited şirket mi? Kuruluş maliyeti, aylık muhasebe ücreti, BAĞ-KUR primi, ne zaman şirket kurmak zorunlu (ilk gelir? ilk reklam? ilk abonelik?).
3. Vergi:
   - Genç girişimci kazanç istisnası (şartları, tutarı, süresi)
   - Basit usul / işletme hesabı esası
   - Telif kazancı istisnası (GVK mükerrer 18) blog yazarlığını kapsar mı, kapsamazsa neden
   - YouTube/sosyal medya içerik üreticiliği istisnası (GVK mükerrer 20/B) — blog ve bülten bu istisnaya giriyor mu, girmiyorsa hangi gelir bu kapsamda
   - Yurt dışından gelen reklam/sponsorluk/abonelik geliri: döviz, fatura kesme, KDV ve hizmet ihracı istisnası
   - Stopaj, KDV, geçici vergi takvimi
4. E-ticaret ve web sitesi zorunlulukları: mesafeli satış sözleşmesi (ücretli abonelik varsa), iptal/iade koşulları, ETBİS kaydı gerekli mi, sitede bulunması zorunlu bilgiler (işletme adı, adres, vergi no, iletişim).
5. KVKK: veri sorumlusu sıfatı, aydınlatma metni, çerez politikası ve çerez onay banner'ı (KVKK Çerez Rehberi), VERBİS kayıt eşiği.
6. İçerik hukuku: alıntı/telif, grafik ve veri kaynaklarının (BIST, TCMB, TÜİK, Bloomberg HT, Investing) kullanım şartları, kaynak gösterme, görsel lisansları.

Sonuç: "Risk seviyesine göre 3 katman" tablosu ver — (1) düşük riskli içerik türleri, (2) dikkatli yazılması gerekenler, (3) hiç yapılmaması gerekenler.
