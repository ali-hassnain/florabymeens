module.exports = {
  purge: ["./src/components/**/*.js", "./pages/**/*.js"],
  theme: {
    // screens: { tablet: "640px", laptop: "1024px", desktop: "1280px" },
    extend: {},
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
