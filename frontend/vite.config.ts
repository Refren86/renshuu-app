import path from "path";
import glsl from "vite-plugin-glsl";
import react from "@vitejs/plugin-react";
import { UserConfig, defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react(), glsl()],
  preview: {
    port: 3000, // prod
  },
  server: {
    port: 3000, // dev
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "./build"),
    emptyOutDir: true,
  },
  test: {
    // describe, it, expect functions etc. will be available without importing
    globals: true,
    // simulates a browser-like environment
    environment: "jsdom",
    //  runs before any test execution
    setupFiles: path.resolve(__dirname, "./src/tests/setup.ts"),
    // disables CSS processing during tests
    css: false,
    // test coverage reporting
    coverage: {
      // default tool used for test coverage
      provider: "c8",
      // formats for coverage reports
      reporter: ["text", "json", "html"],
    },
  },
} as UserConfig);
