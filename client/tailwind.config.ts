import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    '!./node_modules/**/*'      // exclude node_modules just in case
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#202844',
        'secondary': '#fafafa',
        'dark-blue': '#202844',
        'mid-blue': '#273575',
        'off-white': '#fafafa',
      },
    },
  },
  plugins: [],
} satisfies Config

