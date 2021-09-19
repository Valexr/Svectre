export let html = `
    <!-- HTML -->
    <p>
        <a class="btn btn-solid btn-primary btn-lg mr-2" href="#_">Docs</a>
        <a class="btn btn-solid btn-primary btn-lg" href="#_">GitHub</a>
    </p>

    <style>
        .btn {
            --red: red;
            color: var(--red) !important;
        }
    </style>
    `,
    js = `
    // JS
    function changeScheme(scheme) {
        const html = document.documentElement;
        html.setAttribute("scheme", !dark ? "dark" : "light");
        dark = !dark;
    }
    `,
    json = `
    // JSON
    "scripts": {
        "build": "node esbuild",
        "dev": "node esbuild --dev",
        "start": "npx derver --production --port=5050 public"
    }
    `;