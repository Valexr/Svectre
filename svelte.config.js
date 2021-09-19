import preprocess from 'svelte-preprocess';

const DEV = process.argv.includes('--dev');
const options = {
    sourceMap: DEV,
    scss: {
        prependData: `
                @import './src/scss/variables';
                @import './src/scss/mixins';
            `,
    },
    typescript: true
    // replace: !dev ? [[/ lang=("|')(.*?)("|')/g, '']] : [],
};

export default {
    compilerOptions: {
        dev: DEV,
        css: false
    },
    preprocess: [preprocess(options)],
    extensions: ['.svelte'],
}