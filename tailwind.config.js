/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: {
          light: 'rgb(173, 216, 230)',
          default: 'rgb(55, 119, 171)',
          dark: 'rgb(25, 49, 87)',
        },

        text: {
          light: 'rgb(240, 240, 240)',
          default: 'rgb(255, 255, 255)',
          dark: 'rgb(60, 60, 60)',
        },

        button: {
          light: 'rgb(173, 216, 230)',
          default: 'rgb(70, 130, 180)',
          hover: 'rgb(115, 170, 215)',
          disabled: 'rgb(190, 190, 190)',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
      },
    },
  },
  plugins: [],
};
