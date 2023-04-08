const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: colors.sky[800],
        'primary-hover': colors.slate[500],
        secondary: colors.gray[200],
      },
      fontFamily: {
        // serif: ['var(--lora-font)', ...defaultTheme.fontFamily.serif],
        // sans: ['var(--work-sans-font)', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              'text-decoration': 'none',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
