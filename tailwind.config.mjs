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
        surface: 'var(--surface)',
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
        'warm': '0 4px 20px -2px rgba(245, 158, 11, 0.1)',
        'elevated': '0 8px 32px -4px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
