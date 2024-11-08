// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oxford_blue: {
          DEFAULT: '#0b132b',
          100: '#020409',
          200: '#050812',
          300: '#070c1b',
          400: '#091024',
          500: '#0b132b',
          600: '#1e3475',
          700: '#3154bd',
          800: '#6f89da',
          900: '#b7c4ec'
        },
        space_cadet: {
          DEFAULT: '#1c2541',
          100: '#06070d',
          200: '#0b0f1a',
          300: '#111627',
          400: '#161d33',
          500: '#1c2541',
          600: '#35467b',
          700: '#4f68b4',
          800: '#8a9bcd',
          900: '#c4cde6'
        },
        yinmn_blue: {
          DEFAULT: '#3a506b',
          100: '#0b1015',
          200: '#17202a',
          300: '#222f40',
          400: '#2e3f55',
          500: '#3a506b',
          600: '#517197',
          700: '#7894b6',
          800: '#a5b8ce',
          900: '#d2dbe7'
        },
        verdigris: {
          DEFAULT: '#5bc0be',
          100: '#102828',
          200: '#1f5150',
          300: '#2f7978',
          400: '#3fa2a0',
          500: '#5bc0be',
          600: '#7bccca',
          700: '#9cd8d7',
          800: '#bde5e5',
          900: '#def2f2'
        },
        fluorescent_cyan: {
          DEFAULT: '#6fffe9',
          100: '#00493e',
          200: '#00937d',
          300: '#00dcbb',
          400: '#27ffdf',
          500: '#6fffe9',
          600: '#8dffee',
          700: '#a9fff2',
          800: '#c6fff6',
          900: '#e2fffb'
        }
      },
    },
  },
  plugins: [],
}
