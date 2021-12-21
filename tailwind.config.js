module.exports = {
  purge: ["index.html", "./src/**/*,jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {


      backgroundImage: {


          'hero-pattern': "url('./src/empleados.jpeg')"



      }



    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
