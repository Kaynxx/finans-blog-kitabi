/**
 * Türkçe sayı/para biçimlendirme.
 *
 * Elle biçimlendirme YASAK. Türkçe binlik ayracı nokta, ondalık virgüldür;
 * elle yapılan her deneme er ya da geç "1,234.56" üretir.
 */

const TR = "tr-TR";

export function tl(value: number, fractionDigits = 2): string {
  return new Intl.NumberFormat(TR, {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

export function sayi(value: number, fractionDigits = 2): string {
  return new Intl.NumberFormat(TR, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

/** Yüzde. İşaret açıkça gösterilir: renk tek sinyal olamaz. */
export function yuzde(value: number, fractionDigits = 2): string {
  return new Intl.NumberFormat(TR, {
    style: "percent",
    signDisplay: "exceptZero",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value / 100);
}

export function tarih(value: Date | string): string {
  const d = typeof value === "string" ? new Date(value) : value;
  return new Intl.DateTimeFormat(TR, { dateStyle: "long" }).format(d);
}

/**
 * Türkçe büyük/küçük harf. Varsayılan toUpperCase() "ı" -> "I" yerine
 * "i" -> "I" üreterek Türkçeyi bozar. Kullanıcıya gösterilen her
 * dönüşümde bunları kullan.
 */
export const buyuk = (s: string): string => s.toLocaleUpperCase(TR);
export const kucuk = (s: string): string => s.toLocaleLowerCase(TR);

export type Yon = "pozitif" | "negatif" | "notr";

export function yon(value: number): Yon {
  if (value > 0) return "pozitif";
  if (value < 0) return "negatif";
  return "notr";
}

/** Renk körlüğü için renkten bağımsız ikinci sinyal. */
export const YON_ISARETI: Record<Yon, string> = {
  pozitif: "\u25B2",
  negatif: "\u25BC",
  notr: "\u2014",
};
