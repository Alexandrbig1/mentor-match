import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
    assetsDir: "assets",
  },
  css: {
    modules: false,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
