const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
