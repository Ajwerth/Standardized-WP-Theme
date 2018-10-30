const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
      main: './src/js/public.js',
      customizer: './src/js/customizer.js',
      navigation: './src/js/navigation.js',
      focusFix: './src/js/skip-link-focus-fix.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new UglifyJSPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            loader: 'style-loader',
          },
          {
            test: /\.css$/,
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
    }
};