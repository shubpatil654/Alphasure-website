/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FA5A16',
          'orange-hover': '#EA4B07',
          blue: '#1E3A8A',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Inter"', '"Cabinet Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cinzel"', 'Georgia', 'serif'],
      },
      fontSize: {
        'alpha-h1': ['var(--font-h1)', { lineHeight: 'var(--lh-h1)', fontWeight: 'var(--fw-h1)' }],
        'alpha-h2': ['var(--font-h2)', { lineHeight: 'var(--lh-h2)', fontWeight: 'var(--fw-h2)' }],
        'alpha-h3': ['var(--font-h3)', { lineHeight: 'var(--lh-h3)', fontWeight: '600' }],
        'alpha-h4': ['var(--font-h4)', { lineHeight: 'var(--lh-h4)', fontWeight: '600' }],
        'alpha-h5': ['var(--font-h5)', { lineHeight: 'var(--lh-h5)', fontWeight: '600' }],
        'alpha-h6': ['var(--font-h6)', { lineHeight: 'var(--lh-h6)', fontWeight: '600' }],
        'alpha-body': ['var(--font-body)', { lineHeight: 'var(--lh-body)', fontWeight: '400' }],
        'alpha-large-body': ['var(--font-large-body)', { lineHeight: 'var(--lh-large-body)' }],
        'alpha-small': ['var(--font-small)', { lineHeight: 'var(--lh-small)' }],
        'alpha-eyebrow': ['var(--font-eyebrow)', { lineHeight: 'var(--lh-eyebrow)', letterSpacing: '0.1em' }],
        'alpha-btn': ['16px', { lineHeight: '1.2', fontWeight: '600' }],
        'alpha-nav': ['var(--font-nav)', { fontWeight: '500' }],
        'alpha-input': ['16px', { minHeight: '48px' }],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
        'glass-glow': '0 0 25px rgba(255, 255, 255, 0.15)',
        'btn-orange': '0 10px 25px -5px rgba(250, 90, 22, 0.45), 0 8px 10px -6px rgba(250, 90, 22, 0.3)',
      }
    },
  },
  plugins: [],
}
