const path = require("path");

module.exports = {
  // Enable Sass support and configure Sass options
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")], // Add your custom Sass directory here
  },
  cssModules: true, // Enable CSS Modules (Optional)
};
