import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['text', 'html'], 
      exclude: ['node_modules/', 'dist/', '**/*.d.ts',
      '**/vite.config.ts',
      '**/main.tsx',
      '**/*.d.ts',
      '**/type.ts',
      '**/eslint.config.js',
      ]
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__test__/app.test.tsx'
  }
})
