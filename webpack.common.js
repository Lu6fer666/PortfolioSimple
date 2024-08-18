const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
    contact: './js/contact.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/[name].js',
  },
};
