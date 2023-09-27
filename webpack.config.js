const path = require('path');

module.exports = {
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
        inline: false,
    }
};
