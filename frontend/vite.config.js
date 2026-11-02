import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            // Strip all cookies to avoid 431
            proxyReq.removeHeader("cookie");
            proxyReq.removeHeader("Cookie");
          });
        },
      },
    },
  },
});