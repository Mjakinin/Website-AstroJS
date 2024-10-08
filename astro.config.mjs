// Astro-Config-Datei
import { defineConfig } from "astro/config";

// Tailwind CSS importieren
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import partytown from '@astrojs/partytown'


// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image(),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    })
  ],
});
