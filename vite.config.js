import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/mini-portail/", // ✅ correspond exactement au nom de ton dépôt GitHub
});
