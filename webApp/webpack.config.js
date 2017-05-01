var config = {
    entry: './main.js',

    output: {
        path: __dirname,
        filename: 'index.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;