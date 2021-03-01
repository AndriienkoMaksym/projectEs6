const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './app.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname),
        port: 8081,
        stats: 'errors-only',
        open: true
    },
    devtool: 'inline-source-map',
}
