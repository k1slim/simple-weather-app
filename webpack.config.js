const webpack = require('webpack'),
    NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './js/source/models/appModel.js',
    output: {
        path: './js/compiled',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    watch: true,
    
    watchOptions: {
        aggregateTimeout: 200
    },

    devtool: "eval"
};