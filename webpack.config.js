var path = require('path');

module.exports = {
    entry: {
        edit: './src/edit.js',
        finish: './src/finish.js',
        game: './src/game.js',
        index: './src/index.js',
        layout: './src/layout.js',
    },
    output: {
        path: path.resolve(__dirname, 'public/js')
    },
    devServer: {
        contentBase: 'public',
    },
};