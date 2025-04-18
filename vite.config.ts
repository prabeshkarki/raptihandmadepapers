
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
      // Add SWC options for better security
      swcOptions: {
        jsc: {
          target: "es2020",
          parser: {
            syntax: "typescript",
            tsx: true,
            // Avoid generating inefficient regex patterns
            regExpLiterals: true,
          },
          transform: {
            optimizer: {
              globals: {
                vars: {
                  // Avoid unsafe regex optimizations
                  __UNSAFE_REGEX__: "false",
                },
              },
            },
          },
        },
      },
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add security headers
  build: {
    // Apply terser optimizations to prevent regex DoS
    minify: 'terser',
    terserOptions: {
      compress: {
        // Help prevent regex DoS
        unsafe_regex: false,
      },
    },
  },
}));
