const { build } = require("esbuild");
const { derver } = require("derver");
const sveltePlugin = require("esbuild-svelte");
const sveltePreprocess = require("svelte-preprocess");

const DEV = process.argv.includes('--dev');

async function build_client() {
    return await build({
        entryPoints: ['src/main.js'],
        outfile: 'public/build/bundle.js',
        bundle: true,
        minify: !DEV,
        sourcemap: DEV && 'inline',
        mainFields: ['svelte', 'module', 'main'],
        external: ['../img/*'],
        plugins: [
            sveltePlugin({
                compileOptions: {
                    dev: DEV,
                    css: false
                },
                preprocess: [
                    sveltePreprocess()
                ]
            })
        ]
    });
}

build_client();

if (DEV) {
    derver({
        dir: 'public',
        host: '0.0.0.0',
        port: 5050,
        watch: ['public', 'src'],
        onwatch: async (lr, item) => {
            if (item == 'src') {
                lr.prevent();
                try {
                    await build_client();
                } catch (err) {
                    lr.error(err.message, 'Svelte compile error')
                }
            }
        }
    })
}