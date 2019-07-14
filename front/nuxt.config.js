export default {
    mode: 'universal',

    server: {
        port: 3001,
        host: '0.0.0.0',
    },

    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
        ],
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {
        color: '#fff',
    },

    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/app.scss',
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/initBaseComponents',
        '@/plugins/initApollo',
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/style-resources',
    ],

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            config.module.rules.push(
                {
                    test: /\.gql$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'graphql-tag/loader',
                        },
                    ]
                }
            )
        },
    },

    styleResources: {
        scss: [
            '@/assets/scss/_variables.scss',
        ],
    },
};
