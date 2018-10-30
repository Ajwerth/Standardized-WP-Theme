const path = require('path');

module.exports = {
    entry: {
      main: './src/js/public.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};