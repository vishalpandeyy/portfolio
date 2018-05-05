const webpack = require('webpack')

let config = {
    entry: './index.js',
    output: {
        filename: 'output.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/, // files ending with .js
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
}

module.exports = config;