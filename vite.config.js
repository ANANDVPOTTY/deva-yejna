import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? "/deva-yejna/" : "/",
  server: {
    host: "0.0.0.0",
    port: 5173,
    open: true,
  },
});
