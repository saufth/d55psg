import type { Config } from 'tailwindcss'

/** Default values for sizing and spacing */
const sizingConfig = {
  breakpoints: {
    xs: '20rem', /* 320px */
    sm: '24rem', /* 384px */
    md: '28rem', /* 448px */
    lg: '32rem', /* 512px */
    xl: '36rem', /* 576px */
    '2xl': '42rem', /* 672px */
    '3xl': '48rem', /* 768px */
    '4xl': '56rem', /* 896px */
    '5xl': '64rem', /* 1024px */
    '6xl': '72rem', /* 1152px */
    '7xl': '80rem', /* 1280px */
    '8xl': '85.375rem', /* 1366px */
    '9xl': '120rem' /* 1920px */
  },
  defaults: {
    0.75: '0.1875rem', /* 3px */
    15: '3.75rem', /* 60px */
    18: '4.5rem', /* 72px */
    '9/20': '45%',
    '11/20': '55%'
  }
}

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // Salaryman
        salaryman: ['Salaryman'],
        // Uni Neue
        'unineue-thin': ['UniNeue thin'],
        'unineue-light': ['UniNeue light'],
        'unineue-book': ['UniNeue book'],
        'unineue-regular': ['UniNeue regular'],
        'unineue-bold': ['UniNeue bold'],
        'unineue-heavy': ['UniNeue heavy'],
        'unineue-black': ['UniNeue black']
      },
      colors: {
        primary: '#888888' // Taupe Gray
      },
      width: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      maxWidth: {
        ...sizingConfig.breakpoints
      },
      height: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      padding: {
        ...sizingConfig.defaults
      },
      margin: {
        ...sizingConfig.defaults
      },
      zIndex: {
        60: '60',
        70: '70'
      },
      fontSize: {
        md: ['0.938rem', { lineHeight: '1.375rem' }],
        '4.5xl': ['2.5rem', { lineHeight: '1rem' }]
      }
    }
  },
  plugins: []
} satisfies Config
