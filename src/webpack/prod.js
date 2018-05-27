const common = require('./common')

module.exports = {
    module: common.module,
    plugins: common.plugins,
    output: {
        filename: `assets/[name].[chunkhash].js`
    }
}