const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    // Génère le fichier index.html
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    // Génère le fichier contact.html
    new HtmlWebpackPlugin({
      template: './contact.html',
      filename: 'contact.html',
    }),
    // Copie les ressources statiques
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'css', to: 'css' },
        { from: 'js/vendor', to: 'js/vendor' },
        { from: 'js', to: 'js' }, // Copier les fichiers JS s'ils ne sont pas gérés par Webpack
        { from: 'icon.svg', to: 'icon.svg' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'icon.png', to: 'icon.png' },
        { from: '404.html', to: '404.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
        { from: 'fonts', to: 'fonts' }, // Copier les polices
      ],
    }),
  ],
});
