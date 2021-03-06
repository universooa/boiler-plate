// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './')
  }
};
