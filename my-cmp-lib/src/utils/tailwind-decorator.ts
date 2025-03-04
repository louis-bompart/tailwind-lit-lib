// From: https://dev.to/matsuuu/the-modern-2025-web-components-tech-stack-1l00

import { css, LitElement, unsafeCSS } from "lit";
import tailwind from "./tailwind.css" with {type: 'css'};

export type LitElementConstructor<T = typeof LitElement> = T & {
    new (...args: any[]): LitElement;
};

export function withTailwind(constructor: LitElementConstructor) {
    // Append to existing array if set
    if (Array.isArray(constructor.styles)) {
        constructor.styles.push(tailwind);
        return;
    }

    // If not value at all, init an array with styles
    if (!constructor.styles) {
        constructor.styles = [tailwind];
        return;
    }

    // If value is set, but is singular instead of array, make it an array.
    constructor.styles = [constructor.styles, tailwind];
}