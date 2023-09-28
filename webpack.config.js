const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/canvas.ts',
    output: {
        filename: 'canvas.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        hot: true,
        port: 8080,
    },
};
