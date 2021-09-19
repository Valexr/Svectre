/**
 * @module box-l
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

        this.render = () => {
            this.i = `box-l-${[this.padding, this.borderWidth, this.invert].join('')}`;
            this.dataset.i = this.i;
            if (!document.getElementById(this.i)) {
                let styleEl = document.createElement('style');
                styleEl.id = this.i;
                styleEl.innerHTML = `
          [data-i="${this.i}"] {
            padding: ${this.padding};
            border: ${this.borderWidth} solid;
            ${this.invert ?
                        `background-color: var(--color-light);
              filter: invert(100%);`
                        : ''}
          }
      
          [data-i="${this.i}"] {
            background-color: inherit;
          }
        `.replace(/\s\s+/g, ' ').trim();
                this.appendChild(styleEl);
            }
        }

        this.update = () => {
            this.i = `box-l-${[this.padding, this.borderWidth, this.invert].join('')}`;
            this.dataset.i = this.i;
            if (!document.getElementById(this.i)) {
                let styleEl = this.querySelector('style');
                styleEl.id = this.i;
                styleEl.innerHTML = `
          [data-i="${this.i}"] {
            padding: ${this.padding};
            border: ${this.borderWidth} solid;
            ${this.invert ?
                        `background-color: var(--color-light);
              filter: invert(100%);`
                        : ''}
          }
      
          [data-i="${this.i}"] {
            background-color: inherit;
          }
        `.replace(/\s\s+/g, ' ').trim();
                // document.head.appendChild(styleEl);
            }
        }
    }

    get padding() {
        return this.getAttribute('padding') || 'var(--s1)';
    }

    set padding(val) {
        return this.setAttribute('padding', val);
    }

    get borderWidth() {
        return this.getAttribute('borderwidth') || 'var(--border-thin)';
    }

    set borderWidth(val) {
        return this.setAttribute('borderwidth', val);
    }

    get invert() {
        return this.hasAttribute('invert');
    }

    set invert(val) {
        if (val) {
            return this.setAttribute('invert', '');
        } else {
            return this.removeAttribute('invert');
        }
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.update();
    }
}

if ('customElements' in window) {
    customElements.define('box-l', Box);
}