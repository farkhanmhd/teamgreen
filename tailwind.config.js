/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        xxs: '16px',
        xs: '18px',
        sm: '20px',
        base: '24px',
        md: '28px',
        lg: '36px',
        xl: '40px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
        '5xl': '96px',
        '6xl': '128px',
      },
    },
  },
  plugins: [],
};
