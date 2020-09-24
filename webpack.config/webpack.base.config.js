const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../docs'),
    pagesDir: path.join(__dirname, '../src/pages'),
    uikitDir: path.join(__dirname, '../src/uikit')
}
PATHS.pages = fs.readdirSync(PATHS.pagesDir, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

PATHS.uikitPages = fs.readdirSync(PATHS.uikitDir, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);


module.exports = {

    externals: {
        paths: PATHS
    },

    entry: {
        main: `${PATHS.src}/pages/pages.js`,
        uikit: `${PATHS.src}/uikit/uikit.js`
    },

    output: {
        filename: "js/[name].js",
        path: PATHS.dist,
        publicPath: "/"
    },

    module: {
        rules: [{

            test: /\.scss$/,
            exclude: "/src/",
            use: [{
                    loader: "style-loader"
                }, 
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader",
                    options: { sourceMap: true, config: { path: "./postcss.config.js" } }
                }, {
                    loader: "resolve-url-loader",
                    options: {sourceMap: true}
                }, {
                    loader: "sass-loader",
                    options: {sourceMap: true/*, sourceMapContents: false*/}
                }
            ]

        }, {

            test: /\.pug$/,
            exclude: "/src/",
            loader: "pug-loader"

        }, {

            test: /\.(ttf|woff|svg)$/,
            loader: "file-loader",
            include: /fonts/,
            options: {
                name: "./fonts/[folder]/[name].[ext]"
            }

        }, {

            test: /\.(jpg|png|svg)$/,
            loader: "file-loader",
            exclude: /fonts/,            
            options: {
                name: "./images/[name].[ext]"
            }

        }]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        ...PATHS.pages.map(page => new HtmlWebpackPlugin({
            template: `${PATHS.pagesDir}/${page}/${page}.pug`,
            filename: `${page}.html`,
            chuncks: ["main"],
            excludeChunks: ["uikit"]
        })),
        ...PATHS.uikitPages.map(page => new HtmlWebpackPlugin({
            template: `${PATHS.uikitDir}/${page}/${page}.pug`,
            filename: `uikit/${page}.html`,
            chuncks: ["uikit"],
            excludeChunks: ["main"]
        })),
        new CopyPlugin({
            patterns: [{
                  from: `${PATHS.src}/files`,
                  to: 'files'
            }],
          })
      

    ],
}