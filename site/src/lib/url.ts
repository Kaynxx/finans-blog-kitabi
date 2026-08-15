/**
 * Site içi bağlantı üretici.
 *
 * Site hem kök dizinde (tahaboz.com/) hem alt dizinde
 * (kaynxx.github.io/finans-blog-kitabi/) yayınlanabiliyor.
 * Elle yazılan "/kvkk/" gibi mutlak yollar alt dizinde kırılır.
 *
 *   u("/kvkk/")  ->  "/kvkk/"                     (kök dağıtım)
 *   u("/kvkk/")  ->  "/finans-blog-kitabi/kvkk/"  (Pages dağıtımı)
 */
export function u(yol: string): string {
  const taban = import.meta.env.BASE_URL; // sonunda "/" garantili değil
  const t = taban.endsWith("/") ? taban.slice(0, -1) : taban;
  const y = yol.startsWith("/") ? yol : `/${yol}`;
  return `${t}${y}`;
}
