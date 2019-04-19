const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    devtool: 'source-map',

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[chunkhash].js'
    },

    plugins: [
        new CleanWebpackPlugin(['build']),
        new CopyWebpackPlugin([
            {from:'assets/images',to:'assets/images'}
        ])
    ]

});
