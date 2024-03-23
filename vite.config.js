import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "/var/www/html",
  },
  server: {
    port: 3002,
  },
  base: "/What-To-Boycott/",
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
					@import "./src/sass/abstracts/_variables.scss";
					@import "./src/sass/abstracts/_mixins.scss";
				`,
      },
    },
  },
});
