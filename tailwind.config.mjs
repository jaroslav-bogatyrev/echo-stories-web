/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/pages/\\[slug\\].astro',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        brand: {
          red: 'var(--red)',
          yellow: 'var(--yellow)',
          green: 'var(--green)',
          pink: 'var(--pink)',
        },
        muted: 'var(--muted)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Archivo Black', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      borderRadius: {
        handmade: '4px 8px 4px 6px',
      },
      boxShadow: {
        'ink': '4px 4px 0 var(--ink)',
        'ink-sm': '2px 2px 0 var(--ink)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
