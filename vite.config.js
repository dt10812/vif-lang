import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Optional: Plugins for Replit or custom error overlays
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { cartographer } from "@replit/vite-plugin-cartographer";

// Emulate __dirname in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Export Vite config
export default defineConfig({
  // Set root to the frontend directory
  root: path.resolve(__dirname, "client"),

  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID
      ? [cartographer()]
      : [])
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },

  build: {
    outDir: path.resolve(__dirname, "dist/public"), // Final output
    emptyOutDir: true, // Clear output before build
  },

  server: {
    port: 3000,
    open: true, // Open browser on start
  }
});
