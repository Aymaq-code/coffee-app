import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/coffee-app/", // 👈 add this line (repo name)
  server: {
    historyApiFallback: true,
  },
});
