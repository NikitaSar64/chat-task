import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": "/src/app/",
      "@assets": "/src/assets/",
      "@components": "/src/components/",
      "@helpers": "/src/helpers/",
      "@hooks": "/src/hooks/",
      "@interfaces": "/src/interfaces/",
      "@services": "/src/services/",
      "@styles": "/src/styles/",
    },
  },
});
