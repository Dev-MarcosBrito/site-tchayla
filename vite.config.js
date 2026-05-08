import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages: o site é servido em /advocaia-site/
  base: "/advocaia-site/",
  plugins: [react()],
});
