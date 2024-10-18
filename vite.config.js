import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    "process.env.VITE_SOME_KEY": JSON.stringify(process.env.VITE_SOME_KEY),
  },
});
