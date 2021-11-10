import { build } from "esbuild";
import { derver } from "derver";
import sveltePlugin from "esbuild-svelte";
import { unlink } from 'fs/promises';
import * as path from 'path';
import config from "./svelte.config.js";


const DEV = process.argv.includes('--dev');
const HOST = '0.0.0.0';
const PORT = 5050;

let exampleOnResolvePlugin = {
    name: 'example',
    setup(build) {

        // Redirect all paths starting with "images/" to "./public/images/"
        build.onResolve({ filter: /^css\// }, args => {
            console.log(args, process.cwd());
            args.resolveDir = `${process.cwd()}/`;
            return { path: path.join(args.resolveDir, 'src', args.path) };
        });

        // Mark all paths starting with "http://" or "https://" as external
        // build.onResolve({ filter: /^https?:\/\// }, args => {
        //     return { path: args.path, external: true }
        // })
    },
};

build({
    entryPoints: ['src/main.js'],
    bundle: true,
    outfile: 'public/build/bundle.js',
    // outdir: 'public/build/',
    // splitting: true,
    // format: "esm",
    mainFields: ['svelte', 'module', 'main'],
    minify: !DEV,
    incremental: DEV,
    sourcemap: DEV, // && 'inline',
    external: ['../img/*'],
    // loader: {
    //     '.css': 'file'
    // },
    plugins: [
        // exampleOnResolvePlugin,
        sveltePlugin(config)
    ]

}).then(bundle => {
    DEV
        ? derver({
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
        : (unlink('public/build/bundle.js.map'), unlink('public/build/bundle.css.map'));
});