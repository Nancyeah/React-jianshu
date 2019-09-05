const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        './src/index.js'
    ], //入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },//打包输出文件
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test:/\.(woff2?|woff|eot|svg|ttf|otf)(\?.*)?$/,
                loader: 'url-loader?name=fonts/[name]. [hash:7]. [ext]'    
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use:[
                    {loader: 'url-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'React jianshu',
            template: './src/index.html'
        })
    ]
};

module.exports = config;