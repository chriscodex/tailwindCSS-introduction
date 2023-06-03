/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/css/index.css"],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
      }
    }
  },
  plugins: [],
}