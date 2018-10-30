const path = require('path');

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
    }
};