import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { withTailwind } from '../utils/tailwind-decorator.js';

@customElement('my-component')
@withTailwind
export class MyComponent extends LitElement {
    static styles = css`
        :host {
            display: block;
            padding: 16px;
        }
    `;

    render() {
        return html`<p class="text-3xl font-bold underline">Hello, World!</p>`;
    }
}