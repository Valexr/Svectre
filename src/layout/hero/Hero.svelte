<div class="section hero">
    <div class="grid-hero container grid-lg text-center" id="overview">
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
        <p class="deps">Latest version: <span class="version" /></p>
        <div class="columns p-2">
            <div class="column col-12 col-xs-12">
                <div class="text-center deps deps-underground p-2">
                    UNDERGROUND
                    <div class="text-center deps deps-1 deps-underground p-2">
                        <small>deps-1 underground</small>
                        <div
                            class="text-center deps deps-2 deps-underground p-2"
                        >
                            <small>deps-2 underground</small>
                            <div
                                class="text-center deps deps-3 deps-underground p-2"
                            >
                                <small>deps-3 underground</small>
                                <div
                                    class="text-center deps deps-4 deps-underground p-2"
                                >
                                    <small>deps-4 underground</small>
                                    <div
                                        class="text-center deps deps-background p-2"
                                    >
                                        BACKGROUND
                                        <div
                                            class="text-center deps deps-1 deps-background p-2"
                                        >
                                            <small>deps-1 background</small>
                                            <div
                                                class="text-center deps deps-2 deps-background p-2"
                                            >
                                                <small>deps-2 background</small>
                                                <div
                                                    class="text-center deps deps-3 deps-background p-2"
                                                >
                                                    <small
                                                        >deps-3 background</small
                                                    >
                                                    <div
                                                        class="text-center deps deps-4 deps-background p-2"
                                                    >
                                                        <small
                                                            >deps-4 background</small
                                                        >
                                                        <div
                                                            class="text-center deps deps-surface p-2"
                                                        >
                                                            SURFACE
                                                            <div
                                                                class="text-center deps deps-1 deps-surface p-2"
                                                            >
                                                                <small
                                                                    >deps-1
                                                                    surface</small
                                                                >
                                                                <div
                                                                    class="text-center deps deps-2 deps-surface p-2"
                                                                >
                                                                    <small
                                                                        >deps-2
                                                                        surface</small
                                                                    >
                                                                    <div
                                                                        class="text-center deps deps-3 deps-surface p-2"
                                                                    >
                                                                        <small
                                                                            >deps-3
                                                                            surface</small
                                                                        >
                                                                        <div
                                                                            class="text-center deps deps-4 deps-surface p-2"
                                                                        >
                                                                            <small
                                                                                >deps-4
                                                                                surface</small
                                                                            >
                                                                            <div
                                                                                class="text-center deps deps-foreground p-2"
                                                                            >
                                                                                FOREGROUND
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns p-2">
            <div class="column col-12 col-xs-12">
                <div class="text-center bg-light p-2">
                    bg-light
                    <div class="text-center bg-gray-light p-2">
                        bg-gray-light
                        <div class="text-center bg-gray p-2">
                            bg-gray
                            <div class="text-center bg-gray-dark p-2">
                                bg-gray-dark
                                <div class="text-center bg-dark p-2">
                                    bg-dark
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    // :global(:root) {
    //     --bg-foreground: hsla(var(--h), 10%, 25%, calc(var(--a) * 1%));
    //     --color-foreground: hsla(var(--h), 10%, 95%, calc(var(--a) * 1%));
    // }

    // .deps {
    //     background-color: hsla(
    //         var(--h),
    //         10%,
    //         calc(var(--back-light) * 1%),
    //         calc(var(--a) * 1%)
    //     );
    //     color: hsla(
    //         var(--h),
    //         10%,
    //         calc(var(--color-light) * 1%),
    //         calc(var(--a) * 1%)
    //     );
    //     --back-light: 15;
    //     --color-light: 95;
    //     :global(:root[data-scheme="light"]) & {
    //         --back-light: 90;
    //         --color-light: 15;
    //     }
    // }

    // .deps-foreground {
    //     --back-light: 25;
    //     --color-light: 95;
    //     :global(:root[data-scheme="light"]) & {
    //         --back-light: 100;
    //         --color-light: 15;
    //     }
    // }
    // .deps-surface {
    //     --back-light: 20;
    //     --color-light: 95;
    //     :global(:root[data-scheme="light"]) & {
    //         --back-light: 95;
    //         --color-light: 15;
    //     }
    // }
    // .deps-background {
    //     --back-light: 15;
    //     --color-light: 95;
    //     :global(:root[data-scheme="light"]) & {
    //         --back-light: 90;
    //         --color-light: 15;
    //     }
    // }
    // .deps-underground {
    //     --back-light: 10;
    //     --color-light: 95;
    //     :global(:root[data-scheme="light"]) & {
    //         --back-light: 85;
    //         --color-light: 15;
    //     }
    // }
</style>
