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
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/apollo',
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

        },
    },

    styleResources: {
        scss: [
            '@/assets/scss/_variables.scss',
        ],
    },

    apollo: {
        tokenName: 'yourApolloTokenName', // optional, default: apollo-token
        tokenExpires: 10, // optional, default: 7 (days)
        includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
        authenticationType: 'Basic', // optional, default: 'Bearer'
        // required
        clientConfigs: {
            default: {
                // required
                httpEndpoint: 'http://localhost:3002/gql',
                // optional
                // See https://www.apollographql.com/docs/link/links/http.html#options
                httpLinkOptions: {
                    credentials: 'same-origin'
                },
                // You can use `wss` for secure connection (recommended in production)
                // Use `null` to disable subscriptions
                wsEndpoint: null, // optional
                // LocalStorage token
                tokenName: 'apollo-token', // optional
                // Enable Automatic Query persisting with Apollo Engine
                persisting: false, // Optional
                // Use websockets for everything (no HTTP)
                // You need to pass a `wsEndpoint` for this to work
                websocketsOnly: false, // Optional
            },
        },
    },
};
