import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    '!./node_modules/**/*'      // exclude node_modules just in case
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

