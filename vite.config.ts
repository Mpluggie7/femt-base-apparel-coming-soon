import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/femt-base-apparel-coming-soon/",
  plugins: [react()],
});
