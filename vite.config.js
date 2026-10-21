import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/life-of-possibility/",
  plugins: [react()],
});