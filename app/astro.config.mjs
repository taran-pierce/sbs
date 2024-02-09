import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://sbs.taranpierce.com/",
  integrations: [react({
    experimentalReactChildren: true
  })],
  // output: "server",
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  }),
  build: {
    rollupOptions: {
      external: [
        "sharp",
      ],
    },
  },
  // vite: {
  //   optimizeDeps: {
  //     noDiscovery: true,
  //     include: [""],
  //   }
  // }
});
