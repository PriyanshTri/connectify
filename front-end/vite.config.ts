import MillionLint from '@million/lint';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
const _plugins = [react()];
_plugins.unshift(MillionLint.vite())
export default defineConfig({
  plugins: _plugins,
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils/*": path.resolve(__dirname, "./src/utils/*"),
      "@store/*": path.resolve(__dirname, "./src/store/*"),
      "@hooks/*": path.resolve(__dirname, "./src/hooks/*"),
      "@constants/*": path.resolve(__dirname, "./src/constants/*"),
      "@assets/*": path.resolve(__dirname, "./src/assets/*")
    }
  }
});