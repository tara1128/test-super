const webpack = require('webpack')

// 环境变量获取
const { BULID_FOR } = process.env

module.exports = {
    module: {
        rules: [{
            test: /\.(ico|gif|jpg|jpeg|png|svg|webp)$/,
            loader: 'file-loader?context=static&name=assets/[hash:32].[ext]',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            '__BULID_FOR__': JSON.stringify(BULID_FOR) // dev | qa | prod
        })
    ]
}