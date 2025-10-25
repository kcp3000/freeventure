import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',          // <- make it explicit
    }),
  ],
  esbuild: {
    jsx: 'automatic',
    // Nuclear safety net: inject React for any JSX that slips through
    jsxInject: `import React from 'react'`,
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      // DO NOT externalize react in an app build
      // external: ['react', 'react-dom']  // <- remove if present
    }
  }
})
