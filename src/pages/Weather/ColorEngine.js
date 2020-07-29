var Vibrant = require("node-vibrant");
var path = require("path");

// const dir = path.resolve(__dirname);
const dir = path.resolve(__dirname);

Vibrant.from(
  `https://lp-cms-production.imgix.net/2019-06/65830387.jpg`
).getPalette((err, palette) => console.log(palette.Vibrant));
