import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// تنظیم base برای GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/coffee-app/",
});
