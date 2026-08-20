/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="immersive_dark"]'],
  theme: {
    extend: {
      colors: {
        palette: {
          ivory_50: '#F8F6F1',
          ivory_100: '#F1EEE7',
          sand_200: '#DDD6C8',
          stone_300: '#B9B2A5',
          stone_500: '#817B70',
          olive_700: '#4E5748',
          olive_900: '#293126',
          charcoal_950: '#171916',
          bronze_500: '#9B805B',
        },
        background: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          inverse: 'var(--color-bg-inverse)',
        },
        surface: {
          primary: 'var(--color-surface-primary)',
          secondary: 'var(--color-surface-secondary)',
          inverse: 'var(--color-surface-inverse)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          inverse: 'var(--color-text-inverse)',
          muted: 'var(--color-text-muted)',
        },
        border: {
          subtle: 'var(--color-border-subtle)',
          default: 'var(--color-border-default)',
          strong: 'var(--color-border-strong)',
        },
        accent: {
          primary: 'var(--color-accent-primary)',
          secondary: 'var(--color-accent-secondary)',
        },
        interactive: {
          default: 'var(--color-interactive-default)',
          hover: 'var(--color-interactive-hover)',
          active: 'var(--color-interactive-active)',
          inverse: 'var(--color-interactive-inverse)',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': 'clamp(52px, 7vw, 110px)',
        'display-l': 'clamp(42px, 5.5vw, 84px)',
        'display-m': 'clamp(34px, 4.5vw, 64px)',
        'heading-xl': 'clamp(30px, 3.5vw, 48px)',
        'heading-l': 'clamp(26px, 3vw, 40px)',
        'heading-m': 'clamp(22px, 2.5vw, 32px)',
        'heading-s': 'clamp(18px, 2vw, 26px)',
        'body-l': '20px',
        'body-m': '17px',
        'body-s': '15px',
        'caption': '13px',
        'label': '12px',
      },
      letterSpacing: {
        display: '-0.03em',
        heading: '-0.02em',
        body: '0em',
        label: '0.08em',
        uppercase: '0.14em',
      },
      maxWidth: {
        'container': '1440px',
        'wide': '1600px',
        'reading': '760px',
      },
      boxShadow: {
        'subtle': '0 2px 12px rgba(23, 25, 22, 0.05)',
        'medium': '0 8px 30px rgba(23, 25, 22, 0.08)',
        'large': '0 20px 60px rgba(23, 25, 22, 0.12)',
        'float': '0 12px 40px -10px rgba(23, 25, 22, 0.15)',
      },
      transitionTimingFunction: {
        'emphasized': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
