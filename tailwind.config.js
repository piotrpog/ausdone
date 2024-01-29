/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //"./dist/**/*.{html,js}",
    "./templates/**/*.{html,js,twig}",
    "./templates/*.{html,js,twig}",
    "./templates/**/**/*.{html,js,twig}" ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "3xl": "1640px",
      },
      container: {
        center: true,
        screens: {
          "2xl": "1640px",
          xl: "1280px",
          lg: "1024px",
        },
        padding: {
          DEFAULT: "1rem",
        },
      },
      fontFamily: {
        openSans: "Open Sans",
        HelveticaNeue: "HelveticaNeue",
      },
      fontSize: {
        sm: '0.9rem',
        xs: '0.8rem',
        base: '1rem',
        xl: '1.15rem',
        xxl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      borderWidth: {
        10: "10px",
      },
      colors: {
        muted: {
          DEFAULT: "#707070",
        },
        primary: {
          DEFAULT: "#1F7B76",
          muted: "#A4CBC9",
          light: "#A0C7C5",
        },
        purple: {
          DEFAULT: "#6C2B77",
        },
        border: {
          DEFAULT: "#CECECE",
        },
        secondary: {
          DEFAULT: "#E4E4E4",
          light: "#F5F5F5",
        },
      },
      brightness: {
        25: ".25",
      },
      backgroundImage: {
        'hero-1': "url('../images/hero-image-1.png')",
      },
      listStyleImage: {
        checkmark: "url('../images/ok.svg')",
       },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};


