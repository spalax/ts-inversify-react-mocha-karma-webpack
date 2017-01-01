const path = require("path"),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, "./public/js"),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    devServer: { inline: true },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.pcss$/,
              loader: ExtractTextPlugin.extract(['css?modules&importLoaders=1&' +
                                                 'localIdentName=[name]-[local]',
                                                 'postcss-loader'])
            },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ],
        preLoaders: [
            {
                test: /\.pcss$/,
                exclude: /node_modules/,
                loader: 'typed-css-modules?searchDir=src/&camelCase'
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new ExtractTextPlugin('../css/app.css', {
            allChunks: true
        })
    ]
};
