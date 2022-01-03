import { kebabToCamel } from "./utils/cc";

export interface OikiaElement extends HTMLElement {
    /** @deprecated */
    innerHTML: string;
}

export interface OikiaFragment extends HTMLUnknownElement {}

export const getDOMNodes = (selector: string) => {
    return Array.from(document.querySelectorAll(selector)) as OikiaElement[];
}

export const getDOMNode = (selector: string) => {
    return getDOMNodes(selector)[0] as OikiaElement;
}

export const style = (target: OikiaElement, key: any, value: any) => {
    target.style[kebabToCamel(key)] = value;
}