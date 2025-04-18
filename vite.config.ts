
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: './', // Ensure base path is set for GitHub Pages
  plugins: [
    react({
      // Using standard SWC options
      plugins: [],
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add security settings for build
  build: {
    // Apply terser optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        // Help prevent regex DoS
        unsafe_regex: false,
      },
    },
  },
}));
