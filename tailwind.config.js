/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      ...require('tailwindcss/colors'),
      lprimary: 'var(--primary)',
      lsecondary: 'var(--secondary)',
      tertiary: '#ADB7BE',
      lbackground: 'var(--background)',
      ltext: 'var(--text)',
      laccent: 'var(--accent)',
      background: '#121212',
      primary: '#6366f1',
      secondary: '#0ea5e9',

    }
  },
  plugins: [],
}


// colors: {
//   'text': 'var(--text)',
//   'background': 'var(--background)',
//   'primary': 'var(--primary)',
//   'secondary': 'var(--secondary)',
//   'accent': 'var(--accent)',
//  },
 