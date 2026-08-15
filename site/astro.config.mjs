import { defineConfig } from "astro/config";

export default defineConfig({
  // Alan adı alınınca güncelle: sitemap ve kanonik URL bunu kullanır.
  site: "https://tahaboz.com",
  trailingSlash: "always",
  build: { inlineStylesheets: "auto" },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
});
