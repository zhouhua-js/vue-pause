const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/vue-pause.js',
    output: {
        filename: 'vue-pause.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'vue-pause',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    devtool: 'cheap-source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false
            },
            sourceMap: true
        })
    ]

};
