export default {
    target: 'static',
    head: {
		title: 'Tag Heuer',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '26 agency code test' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    css: [
		'~/assets/scss/main.scss'
    ],

    plugins: [],

    components: true,

    buildModules: ["@nuxtjs/svg", '@nuxt/image'],

    modules: [
		'bootstrap-vue/nuxt',
		'@nuxtjs/axios'
    ],

    build: {},
}
