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

export const css = (target: OikiaElement | undefined, key: any, value: any) => {
    if(
        key == "backgroundImage" ||
        key == "maskImage"
    ) {
        let isURL = true;

        try {
            new URL(value);
        } catch(e) {
            isURL = false;
        }

        if(isURL) {
            value = `url(${value})`
        }
    }

    target.style[kebabToCamel(key)] = value;
}