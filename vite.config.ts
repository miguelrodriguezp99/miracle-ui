import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@packages": path.resolve(__dirname, "packages"),
      "@components": path.resolve(__dirname, "packages/components"),
    },
  },
});
