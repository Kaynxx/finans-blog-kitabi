#!/usr/bin/env python
"""
Fontları Türkçe karakter setine indirger.

Neden: Fontsource'un `latin-ext` subset'i tüm Latin Extended-A'yı taşır (83 kB).
Türkçe için gereken yalnızca Ğğ İı Şş. Subset sonrası ~4 kB'a düşer.

Neden `latin-ext` silinmiyor: Türkçe'ye özgü glifler ORADA. Sadece `latin`
kullanılırsa ğ İ ı ş düşer ve satır ritmi bozulur.

Çalıştırma:  npm run fonts
"""
import shutil
import subprocess
import sys
from pathlib import Path

KOK = Path(__file__).resolve().parent.parent
NM = KOK / "node_modules"
HEDEF = KOK / "public" / "fonts"

# latin dosyası: Latin-1 + tipografi + para birimi + yön işaretleri
LATIN = (
    "U+0000-00FF,"
    "U+2000-206F,"          # – — ' ' " " … ‰ ′ ″
    "U+20A6-20BF,"          # ₺ ve diğer para birimleri
    "U+2116,U+2122,"        # № ™
    "U+2190-2193,U+2212,"   # oklar, − (gerçek eksi işareti)
    "U+25B2,U+25BC,U+25CF,"  # ▲ ▼ ● yön işaretleri
    "U+0300-030F"           # birleştirici aksanlar
)

# latin-ext dosyası: SADECE Türkçe (+ Romence, komşu diller için ucuz)
LATIN_EXT = "U+011E-011F,U+0130-0131,U+015E-015F,U+0152-0153,U+0218-021B"

KAYNAKLAR = [
    ("inter-latin.woff2",
     NM / "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2", LATIN),
    ("inter-latin-ext.woff2",
     NM / "@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2", LATIN_EXT),
    ("source-serif-4-latin.woff2",
     NM / "@fontsource-variable/source-serif-4/files/source-serif-4-latin-wght-normal.woff2", LATIN),
    ("source-serif-4-latin-ext.woff2",
     NM / "@fontsource-variable/source-serif-4/files/source-serif-4-latin-ext-wght-normal.woff2", LATIN_EXT),
]


def main() -> int:
    HEDEF.mkdir(parents=True, exist_ok=True)
    once = sonra = 0

    for ad, kaynak, aralik in KAYNAKLAR:
        if not kaynak.exists():
            print(f"HATA: kaynak yok -> {kaynak}", file=sys.stderr)
            return 1

        gecici = HEDEF / (ad + ".tmp")
        sonuc = subprocess.run(
            [
                sys.executable, "-m", "fontTools.subset", str(kaynak),
                f"--unicodes={aralik}",
                "--flavor=woff2",
                "--layout-features=kern,liga,calt,tnum,lnum,frac,ccmp,mark,mkmk",
                "--no-hinting",
                "--drop-tables+=DSIG",
                f"--output-file={gecici}",
            ],
            capture_output=True, text=True,
        )
        if sonuc.returncode != 0:
            print(f"HATA: {ad}\n{sonuc.stderr[-800:]}", file=sys.stderr)
            return 1

        gecici.replace(HEDEF / ad)
        a, b = kaynak.stat().st_size, (HEDEF / ad).stat().st_size
        once += a
        sonra += b
        print(f"{ad:34} {a/1024:6.1f} -> {b/1024:5.1f} kB  ({100 - b/a*100:4.1f}% azalma)")

    print(f"\nTOPLAM {once/1024:.1f} kB -> {sonra/1024:.1f} kB")
    if sonra / 1024 > 100:
        print("UYARI: font bütçesi (100 kB) aşıldı", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
