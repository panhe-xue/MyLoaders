var path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: path.resolve(__dirname, 'loaders/test-loader') },
                ]
            }
        ]
    }
}