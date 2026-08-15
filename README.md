# Finans Blogu + Bülten — Proje Kitabı

Türkiye'de sıfırdan bir **finans blogu** ve **e-posta bülteni** kurmak için hazırlanmış
araştırma ve karar kitabı. Her bölüm bağımsız bir araştırma turunun (lane) çıktısıdır ve
sonunda **KARAR** satırlarıyla biter — "duruma göre değişir" cümlesi yasaktır.

Bu depo aynı zamanda projenin **tasarımının herkese açık incelenebildiği** yerdir.

## Proje öncelikleri

1. **Tasarım** — birinci öncelik. Kalite algısı tasarımdan gelir; reklam bunu bozmayacak.
2. **Reklam geliri** — site kendini finanse etsin, ama okuma deneyiminin önüne geçmesin.
3. **Bülten** — asıl varlık e-posta listesi. Platform kiralık, liste mülk.
4. **Hukuki güvenlik** — SPK / KVKK / İYS sınırları içinde kalmak pazarlıksız.

## İçindekiler

| # | Bölüm | Ne cevaplıyor |
|---|---|---|
| 01 | [Platform ve teknik yığın](01-platform/platform-ve-teknik-yigin.md) | Blogu neyin üstüne kurayım? Ödemeyi nasıl alırım? |
| 02 | [Bülten altyapısı ve İYS](02-bulten/bulten-altyapisi-ve-iys.md) | E-posta gerçekten gelen kutusuna nasıl düşer? İYS zorunlu mu? |
| 03 | [SPK, KVKK, vergi](03-hukuk/spk-kvkk-vergi.md) | Hangi cümle suç? Hangi vergi rejimi? Ne zaman şirket? |
| 04 | [Niş ve içerik stratejisi](04-icerik/nis-secimi-ve-icerik-stratejisi.md) | Ne yazacağım, neden beni okusunlar? |
| 05 | [SEO, dağıtım, ilk 1.000 abone](05-seo/seo-dagitim-ve-ilk-1000-abone.md) | Trafik ve abone nereden gelecek? |
| 06 | [Gelir modelleri ve birim ekonomi](06-monetizasyon/gelir-modelleri-ve-birim-ekonomi.md) | Bu iş ne zaman para kazanır, ne kadar? |
| 07 | [Reklam entegrasyonu ve API'ler](07-reklam/reklam-entegrasyonu-ve-api.md) | Reklamı hangi API ile, tasarımı bozmadan nasıl koyarım? |
| 08 | [Tasarım sistemi ve vitrin](08-tasarim/tasarim-sistemi-ve-vitrin.md) | Tasarım dili ne? Herkes nereden inceleyecek? |
| — | [Ana karar özeti](00-karar/ozet.md) | Hepsinin birleştirilmiş hâli ve yol haritası |

## Kaynaklar

- [`kaynaklar/dogrulanmis-olgular/`](kaynaklar/dogrulanmis-olgular/) — bağımsız web
  doğrulamasından geçmiş, kaynak linkli kritik olgular. **Çelişki hâlinde bunlar kazanır.**
- [`kaynaklar/lane-briefleri/`](kaynaklar/lane-briefleri/) — her araştırma turunun ham görev tanımı.
- [`kaynaklar/ham-lane-ciktilari/`](kaynaklar/ham-lane-ciktilari/) — işlenmemiş model çıktıları.

## Bu kitap nasıl okunmalı

- **`[DOĞRULA]`** etiketi: rakam veya olgu satın alma/başvuru anında birincil kaynaktan
  teyit edilmeli. Araştırma turları emin olmadıklarını bu şekilde işaretledi.
- **KARAR** satırları: tartışmanın kapandığı yer. Değiştirmek isterseniz gerekçesini yazın.
- Bölümler arasında çelişki varsa `kaynaklar/dogrulanmis-olgular/` belirleyicidir.

## Yöntem

Sekiz bağımsız araştırma turu paralel çalıştırıldı (Codex `gpt-5.6-sol`, `high`/`xhigh`
akıl yürütme, read-only). Türkiye'ye özgü ve yanlış olması en pahalıya patlayacak olgular
(İYS zorunluluğu, Stripe erişimi, SPK yaptırımı, GVK mük. 20/B istisna tutarı, AdSense RPM)
ayrıca canlı web araştırmasıyla çapraz doğrulandı.

## Uyarı

Bu depo hukuki veya mali müşavirlik hizmeti değildir. Yayına ve ilk tahsilata başlamadan
önce sermaye piyasası hukuku bilen bir avukat ve dijital gelir tecrübeli bir SMMM ile
somut iş modelini yazılı olarak teyit edin.
