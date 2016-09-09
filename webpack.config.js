var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: "cheap-source-map",
    // 表示入口文件
    entry: "./index.js",
    // 表示输出文件
    output: {
        path: "./public/js/",
        filename: "bundle.js",
        sourceMapFilename: "bundle.js.map"
    },
    resolve: {
        alias: {
            'webworkify': 'webworkify-webpack'
        }
    },
    node: {
        fs: "empty"
    },
    module: {
        loaders: [{
                test: /\.geojson/,
                loader: "raw-loader"
            }, {
                test: /\.json/,
                loader: "json-loader"
            }, {
                test: /\.css/,
                loader: "style-loader!css-loader"
            }

            , {
                test: /\.js$/,
                include: path.resolve('node_modules/mapbox-gl-shaders/index.js'),
                loader: 'transform/cacheable?brfs'
            }, {
                test: /\.(eot|woff|png|woff2|ttf|gif)$/,
                loader: "file-loader"
            }, {
                test: /\.svg/,
                loader: 'svg-url-loader'
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ],
        postLoaders: [{
            include: /node_modules\/mapbox-gl-shaders/,
            loader: 'transform',
            query: 'brfs'
        }]

    }
};
