const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
    contact: './js/contact.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].bundle.js',
  },
};
