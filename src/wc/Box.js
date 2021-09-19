/**
 * @module b-ox
 * @description
 * A custom element for generic boxes/containers
 * @property {string} padding=var(--s1) A CSS `padding` value
 * @property {string} borderWidth=var(--border-thin) A CSS `border-width` value
 * @property {boolean} invert=false Whether to apply an inverted theme. Only recommended for greyscale designs.
 */
export default class Box extends HTMLElement {

    static get observedAttributes() {
        return ['borderwidth', 'padding', 'invert'];
    }

    constructor() {
        super();
        console.log('init', this)
        // elem.setAttribute('padding', 'var(--s1)')
        // elem.setAttribute('borderWidth', 'var(--border-thin)')
        // () => {
        // this.padding = 'var(--s1)'
        // this.borderWidth = 'var(--border-thin)'
        // this.dataset.i = `Box-${[this.padding, this.borderWidth, this.invert].join('')}`;
        // let style = document.createElement('style');
        // style.textContent = `
        //         [data-i="${this.dataset.i}"] {
        //             padding: ${this.getAttribute('padding') || 'var(--s1)'};
        //             border: ${this.getAttribute('borderWidth') || 'var(--border-thin)'}  solid;
        //             ${this.invert ? `background-color: var(--color-light); filter: invert(100%);` : 'background-color: inherit;'}
        //         }
        //   `;
        // this.appendChild(style);
        // }
        // Create a shadow root
        // const shadow = this.attachShadow({ mode: 'open' });
        // if (!document.getElementById(this.i)) {
        // }
        // connect(this);

        // this.render = () => {
        //     this.i = `Box-${[this.padding, this.borderWidth, this.invert].join('')}`;
        //     this.dataset.i = this.i;
        //     if (!document.getElementById(this.i)) {
        //         let styleEl = document.createElement('style');
        //         // styleEl.id = this.i;
        //         styleEl.textContent = `
        //   [data-i="${this.i}"] {
        //     padding: ${this.padding};
        //     border: ${this.borderWidth} solid;
        //     ${this.invert ? `background-color: var(--color-light); filter: invert(100%);` : ''}
        //   }

        //   [data-i="${this.i}"] {
        //     background-color: inherit;
        //   }
        // `.replace(/\s\s+/g, ' ').trim();
        //         this.appendChild(styleEl);
        //     }
        // }
    }

    // get padding() {
    //     return this.getAttribute('padding') || 'var(--s1)';
    // }

    // set padding(val) {
    //     return this.setAttribute('padding', val);
    // }

    // get borderWidth() {
    //     return this.getAttribute('borderwidth') || 'var(--border-thin)';
    // }

    // set borderWidth(val) {
    //     return this.setAttribute('borderwidth', val);
    // }

    // get invert() {
    //     return this.hasAttribute('invert');
    // }

    // set invert(val) {
    //     if (val) {
    //         return this.setAttribute('invert', '');
    //     } else {
    //         return this.removeAttribute('invert');
    //     }
    // }

    connectedCallback() {
        console.log('connectedCallback()', this);
        connect(this);
    }

    disconnectedCallback() {
        console.log('disconnectedCallback()', this);
    }

    adoptedCallback() {
        console.log('adoptedCallback()', this);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributeChangedCallback(name, oldValue, newValue)', this);
        update(this);
    }
}

let padding = 'var(--s1)', borderWidth = 'var(--border-thin)', invert = false

function connect(elem) {
    console.log(borderWidth)
    padding = elem.getAttribute('padding') || 'var(--s1)'
    borderWidth = elem.getAttribute('borderWidth') || 'var(--border-thin)'
    invert = elem.hasAttribute('invert')
    elem.dataset.i = `Box-${[padding, borderWidth, invert].join('')}`;
    let style = document.createElement('style');
    style.textContent = `
        [data-i="${elem.dataset.i}"] {
            padding: ${padding};
            border: ${borderWidth}  solid;
            ${invert ? `background-color: var(--color-light); filter: invert(100%);` : 'background-color: inherit;'}
        }
    `;
    elem.appendChild(style);
}

function update(elem) {
    console.log(borderWidth)
    elem.dataset.i = `Box-${[elem.padding, elem.borderWidth, elem.invert].join('')}`;
    elem.querySelector('style').textContent = `
        [data-i="${elem.dataset.i}"] {
            padding: ${elem.getAttribute('padding') || 'var(--s1)'};
            border: ${elem.getAttribute('borderWidth') || 'var(--border-thin)'}  solid;
            ${elem.invert ? `background-color: var(--color-light); filter: invert(100%);` : 'background-color: inherit;'}
        }
  `;
}

if ('customElements' in window) {
    customElements.define('b-ox', Box);
}