import { defineConfig } from "astro/config";

/**
 * İki dağıtım hedefi var:
 *
 *  1) GitHub Pages (şimdi)  -> kaynxx.github.io/finans-blog-kitabi/
 *     Proje sayfası olduğu için alt dizinde yayınlanır, base gerekir.
 *
 *  2) Kendi alan adı (sonra) -> tahaboz.com
 *     Kök dizinde yayınlanır, base "/" olur.
 *
 * Fark ortam değişkeniyle yönetilir; kod tek kalır.
 */
const PAGES = process.env.DEPLOY_TARGET === "gh-pages";

export default defineConfig({
  site: PAGES ? "https://kaynxx.github.io" : "https://tahaboz.com",
  base: PAGES ? "/finans-blog-kitabi" : "/",
  trailingSlash: "always",
  build: {
    // Stil ASLA HTML'e gömülmesin: fonts.css içindeki göreli url()'ler
    // CSS dosyasının konumuna göre çözülür. Gömülürse sayfa derinliğine
    // göre çözülür ve alt dizinde yayında font yolları kırılır.
    inlineStylesheets: "never",
  },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
});
