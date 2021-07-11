const esbuild = require("esbuild");
const { derver } = require("derver");
const sveltePlugin = require("esbuild-svelte");
const sveltePreprocess = require("svelte-preprocess");

const DEV = process.argv.includes('--dev');
const HOST = '0.0.0.0';
const PORT = 5050;

esbuild.build({
    entryPoints: ['src/main.js'],
    bundle: true,
    outfile: 'public/build/bundle.js',
    mainFields: ['svelte', 'module', 'main'],
    minify: !DEV,
    incremental: DEV,
    sourcemap: DEV,
    external: ['../img/*'],
    plugins: [
        sveltePlugin({
            compileOptions: {
                dev: DEV,
                css: false
            },
            preprocess: [
                sveltePreprocess({
                    scss: {
                        prependData: `
                            @import './src/scss/variables';
                            @import './src/scss/mixins';
                        `,
                    },
                })
            ],
            cache: false

        })
    ]

}).then(bundle => {
    DEV && derver({
        dir: 'public',
        host: HOST,
        port: PORT,
        watch: ['public', 'src'],
        onwatch: async (lr, item) => {
            if (item == 'src') {
                lr.prevent();
                bundle.rebuild().catch(err => lr.error(err.message, 'Svelte compile error'));
            }
        }
    })
});