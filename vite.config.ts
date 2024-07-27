import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { ValidateEnv, Schema } from "@julr/vite-plugin-validate-env";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ValidateEnv({
      VITE_BUILD_NUMBER: Schema.string.optional(),
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
