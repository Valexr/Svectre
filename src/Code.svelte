<pre
    id="editor"
    class="code my-2 language-js"
    data-lang="JS">
    <code class="depth depth-underground language-js" bind:clientHeight={codeHeight}>
        {@html javascript}
    </code>
    <textarea id="editor-content" bind:value={textarea} height={codeHeight} spellcheck="false"></textarea>
</pre>

<pre
    class="code my-2 language-html"
    data-lang="HTML">
    <code class="depth depth-underground language-html">
        {@html Prism.highlight(html, Prism.languages.html)}
    </code>
</pre>

<pre
    class="code my-2 language-html"
    data-lang="JSON">
    <code class="depth depth-underground language-json" contenteditable="true" bind:innerHTML={jsonCode}>
        <!-- {@html json} -->
    </code>
</pre>

<script>
    import Prism from 'prismjs';
    import 'prismjs/components/prism-json';
    import { html, js, json } from '@/code';

    // document.addEventListener("DOMContentLoaded", function (event) {
    //     var editorCode = document.getElementById("editor-code");
    //     var editorContent = document.getElementById("editor-content");
    //     var selector = document.getElementById("selector");
    //     editorCode.innerHTML = Prism.highlight(
    //         editorContent.value,
    //         Prism.languages.javascript
    //     );

    //     $("#editor-content").bind("input propertychange", function () {
    //         editorCode.innerHTML = Prism.highlight(
    //             this.value,
    //             Prism.languages.javascript
    //         );
    //     });
    // });

    let textarea = js,
        codeHeight = 0;

    $: javascript = Prism.highlight(textarea || js, Prism.languages.js);
    $: jsonCode = Prism.highlight(json, Prism.languages.json);
    // console.log(Prism.languages, jsonCode);
</script>

<style lang="scss" global>
    @import 'prism/prism.scss';
</style>
