export interface OikiaElement extends HTMLElement {
    /** @deprecated */
    innerHTML: string;
}

export const getDOMNodes = (selector: string) => {
    return document.querySelectorAll(selector);
}

export const getDOMNode = (selector: string) => {
    return getDOMNodes(selector)[0];
}