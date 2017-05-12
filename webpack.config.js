const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//gzip化
const CompressionPlugin = require('compression-webpack-plugin');
var compress = require('compression');


module.exports = [{
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    entry: {
        main: './app/src/ts/index.tsx'
    },
    output: {
        publicPath: '',
        path: path.join(__dirname, './app/view/js/'),
        filename: "[name].js",
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'ts-loader'
            }],
        }]
    }
}, {
    resolve: {
        extensions: ['.css', '.scss']
    },
    entry: {
        bundle: './app/src/sass/bundle.scss',
    },
    output: {
        path: path.join(__dirname, '/app/view/css'),
        filename: "[name].css"
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: ["css-loader", "sass-loader", "postcss-loader"]
            })
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('autoprefixer')({
                        browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions']
                    })
                ]
            }
        }),
        new ExtractTextPlugin("[name].css"),
        new BrowserSyncPlugin({
            server: {
                baseDir: ['./app'],
                middleware: function(req, res, next) {
                    var gzip = compress();
                    gzip(req, res, next);
                }
            },
            directory: true,
            files: [
                'app/view/js/*.js',
                'app/view/css/*.css'
            ]
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.css$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
}];