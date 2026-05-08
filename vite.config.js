import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages: o site é servido em /site-tchayla/
  base: "/site-tchayla/",
  plugins: [react()],
});
