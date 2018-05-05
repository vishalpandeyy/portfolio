const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'output.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/, // files ending with .js
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: ExtractTextWebpackPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader'
            })
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css')
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        inline: true, 
        historyApiFallback: true,
        port: 9000
    },
    devtool: 'eval-source-map'
}

module.exports = config;