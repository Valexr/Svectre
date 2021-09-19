<section class="section hero {mq && `hero-${mq}`}">
    <div class="hero-body container grid-lg text-center" id="overview">
        <!-- <div class="docs-brand">
            <a class="docs-logo" href="index.html"
                ><img
                    src="img/spectre-logo.svg"
                    alt="Spectre.css CSS Framework"
                />
                <h2>SVECTRE</h2></a
            >
        </div> -->
        <h1>SVECTRE</h1>
        <p>
            A
            <u>Lightweight</u>,
            <u>Responsive</u> and
            <u>Modern</u> CSS Framework
        </p>
        <p>
            <a class="btn btn-solid btn-primary btn-lg mr-2" href="#_">Docs</a>
            <a class="btn btn-solid btn-primary btn-lg" href="#_">GitHub</a>
        </p>
        <p class="depth">Latest version: <span class="version" /></p>
    </div>
    <Depth />
</section>

<script>
    import Depth from '../../Depth.svelte';
    import '../../css/_hero.css';

    export let mq = '';
</script>

<style>
    @import '_hero.css';
    :global(.hero) {
        background-image: url('../img/svg.svg');
        background-size: 1em;
    }
    .hero {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 4rem;
        padding-top: 4rem;
    }
    .hero.hero-sm {
        padding-bottom: 2rem;
        padding-top: 2rem;
    }

    .hero.hero-lg {
        padding-bottom: 8rem;
        padding-top: 8rem;
    }

    .hero .hero-body {
        padding: var(--layout-spacing);
    }
</style>
