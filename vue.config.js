module.exports = {
    chainWebpack: config => {
        config.externals({
            'axios': 'axios',
            'vuetify': 'vuetify'
        })
    }
}
