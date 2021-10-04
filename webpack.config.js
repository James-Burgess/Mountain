var path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    experiments: {
        topLevelAwait: true,
    },
    plugins: [
        new Dotenv(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: {
            index: 'index.html'
        },
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    }
};
