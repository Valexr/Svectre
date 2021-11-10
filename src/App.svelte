<header class="container navbar p-fixed py-2 depth depth-foreground">
    <section class="navbar-section">
        <a href="#_" class="navbar-brand mr-2">{name}</a>
        <a href="#_" class="btn btn-link">Docs</a>
        <a href="#_" class="btn btn-link">GitHub</a>
    </section>
    <section class="navbar-section">
        <Button primary on:click={changeScheme}>
            <i class="icon icon-{dark ? 'plus' : 'minus'}" />
        </Button>
    </section>
</header>
<main class="text-center">
    <!-- <Compary /> -->
    <Hero mq="lg" />
    <b-ox borderWidth="var(--s1)" on:click={clickBox}>b-ox</b-ox>
    <box-l borderWidth="var(--s1)" padding="var(--s2)" on:click={clickBox}
        >b-ox</box-l
    >
    <s-box>s-box</s-box>
    <!-- <div class="toast toast-primary">
        <button class="btn btn-clear float-right" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div> -->
    <article class="hero depth depth-underground container">
        <h2>Cards</h2>
        <p>Cards</p>
        <div class="grid-lg container text-center hero-body">
            <section class="columns p-2">
                <div class="column col-4 col-xs-12">
                    <Card>
                        <span slot="title" class="card-title">card-title</span>
                        <div slot="body">
                            Lightweight (~10KB gzipped) starting point for your
                            projects
                        </div>
                    </Card>
                </div>
                <div class="column col-4 col-xs-12">
                    <Card img={{ src: 'img/osx-el-capitan-2.jpg' }}>
                        <span slot="title" class="card-title">card-title</span>
                        <div slot="body">
                            Flexbox-based, responsive and mobile-friendly layout
                        </div>
                    </Card>
                </div>
                <div class="column col-4 col-xs-12">
                    <Card img={{ src: 'img/macos-sierra-2.jpg' }}>
                        <span slot="title" class="card-title">card-title</span>
                        <div slot="body">
                            Elegantly designed and developed elements and
                            components
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    </article>
    <article class="hero depth depth-surface">
        <h2>Surface</h2>
        <p>Buttons</p>
        <div class="column col-10 col-sm-12 col-mx-auto">
            <Text />
            <a class="btn btn-primary btn-lg" href="#_"> Install Svectre </a>
        </div>
    </article>
    <article class="hero depth depth-foreground">
        <h2>Foreground</h2>
        <p>Buttons</p>
        <div class="column col-10 col-sm-12 col-mx-auto">
            <a class="btn btn-solid btn-primary-light btn-lg" href="#_">
                Install Svectre
            </a>
        </div>
    </article>
    <article class="hero depth depth-background">
        <h2>Codes</h2>
        <p>Background</p>
        <div class="column col-10 col-sm-12 col-mx-auto">
            <Code />
            <pre class="code my-2" data-lang="HTML"><code>code</code></pre>
            <a class="btn btn-solid btn-primary-light btn-lg" href="#_">
                Install Svectre
            </a>
        </div>
    </article>
    <article class="hero depth depth-underground">
        <h2>Underground</h2>
        <p>Buttons</p>
        <div class="column col-10 col-sm-12 col-mx-auto">
            <a class="btn btn-solid btn-primary-light btn-lg" href="#_">
                Install Svectre
            </a>
        </div>
    </article>
    <article class="hero bg-primary">
        <h2>Primary</h2>
        <p>Buttons</p>
        <div class="column col-10 col-sm-12 col-mx-auto">
            <a class="btn btn-solid btn-primary-light btn-lg" href="#_">
                Install Svectre
            </a>
        </div>
    </article>
    <article class="hero bg-secondary">
        <h2>Secondary</h2>
        <p>Buttons</p>
        <div class="column col-10 col-sm-12 col-mx-auto">
            <a class="btn btn-solid btn-secondary-light btn-lg" href="#_">
                Install Svectre
            </a>
        </div>
    </article>
    <article class="hero bg-success">
        <h2>Success</h2>
        <p>Buttons</p>
        <div class="column col-10 col-sm-12 col-mx-auto">
            <a class="btn btn-solid btn-primary-light btn-lg" href="#_">
                Install Svectre
            </a>
        </div>
    </article>
    <article class="hero bg-warning">
        <h2>Warning</h2>
        <p>Buttons</p>
        <div class="column col-10 col-sm-12 col-mx-auto">
            <a class="btn btn-solid btn-primary-light btn-lg" href="#_">
                Install Svectre
            </a>
        </div>
    </article>
    <article class="hero bg-error">
        <h2>Error</h2>
        <p>Buttons</p>
        <div class="column col-10 col-sm-12 col-mx-auto">
            <a class="btn btn-solid btn-primary-light btn-lg" href="#_">
                Install Svectre
            </a>
        </div>
    </article>
    <article class="hero">
        <h2>Buttons</h2>
        <p>
            Buttons include simple button styles for actions in different types
            and sizes.
        </p>
        <section class="m-2">
            <Button link>btn-link</Button>
            <Button>btn</Button>
            <Button solid>btn-solid</Button>
            <Button primary>btn-primary</Button>
            <Button primary solid>btn-solid</Button>
        </section>
        <section class="m-2">
            <Button dark>btn-dark</Button>
            <Button darken>btn-darken</Button>
            <Button>btn</Button>
            <Button lighten>btn-lighten</Button>
            <Button light>btn-light</Button>
        </section>
        <section class="m-2">
            <Button dark solid>btn-dark</Button>
            <Button darken solid>btn-darken</Button>
            <Button solid>btn</Button>
            <Button lighten solid>btn-lighten</Button>
            <Button light solid>btn-light</Button>
        </section>
        <section class="m-2">
            <Button primary badge="1">primary</Button>
            <Button success badge="1">success</Button>
            <Button warning badge="1">warning</Button>
            <Button error badge="1">error</Button>
        </section>
        <section class="m-2">
            <Button primary solid badge="1">primary</Button>
            <Button success solid badge="1">success</Button>
            <Button warning solid badge="1">warning</Button>
            <Button error solid badge="1">error</Button>
        </section>
        <section class="m-2">
            <Button action solid sm tooltip="btn-action">
                <i class="icon icon-plus" />
            </Button>
            <Button lg clear solid dark tooltip="btn-clear" />
            <Button lg clear tooltip="btn-clear" />
        </section>
        <Button bgPrimary>primary</Button>
        <button class="btn bg-light">primary</button>
    </article>
</main>
<footer class="container navbar py-2 depth depth-underground">
    <section class="navbar-section flex-centered">
        <h5>© {new Date().getFullYear()} {name}</h5>
    </section>
</footer>

<script>
    import { onMount } from 'svelte';
    import { media } from 'svelte-match-media';
    import { Button } from '@/elements';
    import { Hero } from '@/layout';
    import { Card } from '@/components';
    import '@/wc/Box';
    import '@/wc/s-box';
    import '@/wc/box-l';
    import '@/theme.css';
    import Text from '@/Text.svelte';
    import Code from '@/Code.svelte';
    // import { Compary } from 'compary';

    export let name,
        dark = false;

    function clickBox(e) {
        const bw = e.target.getAttribute('borderwidth');
        bw === 'var(--s1)'
            ? e.target.setAttribute('borderwidth', 'var(--s-1)')
            : e.target.setAttribute('borderwidth', 'var(--s1)');
    }
    $: rootMedia($media);

    function rootMedia(media) {
        const html = document.documentElement;
        const keys = Object.entries(media).filter(([k, v]) => {
            if (v === true) return k;
        });
        const k = keys.flat().filter((k) => k.length > 3);
        html.setAttribute('media', keys[0][0]);
        html.setAttribute('orientation', k[0]);
        html.setAttribute('screen', k[2]);
        html.setAttribute('scheme', media.dark ? 'dark' : 'light');
        dark = media.dark;
    }

    function changeScheme(scheme) {
        const html = document.documentElement;
        html.setAttribute('scheme', !dark ? 'dark' : 'light');
        dark = !dark;
    }
</script>

<style lang="scss" global>
    @import 'theme';
    // @import "scss/spectre";
    @import 'scss/spectre-icons';
    // @import "theme.css";

    header {
        z-index: var(--zindex-0);
    }
    footer {
        height: 5em;
    }

    b-ox {
        cursor: pointer;
        display: block;
        padding: var(--s1);
        border-width: var(--border-thin);
        /* ↓ For high contrast mode */
        outline: var(--border-thin) solid;
        outline-offset: calc(var(--border-thin) * -1);
        color: currentColor;
    }
</style>
