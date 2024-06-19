
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@S": path.resolve(__dirname, "./src/services/all-services.ts"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@config": path.resolve(__dirname, "./src/_common/config"),
      "@routes": path.resolve(__dirname, "./src/_common/routes"),
      "@components": path.resolve(__dirname, "./src/_common/components"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@services_injector": path.resolve(__dirname, "./src/_common/config/services/service-injector.ts"),
      "@redux_config": path.resolve(__dirname, "./src/_common/config/redux/decorators/redux-config.ts"),

      "@route": path.resolve(__dirname, "./src/app/route"),
    },
  },
});
