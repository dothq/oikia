import { isValidQuery } from "./utils/html"
import { appendChild } from "./children";
import { appendChildren, attr, OikiaElement, protectElement } from ".";

export type Children = any | string | OikiaElement | Record<any, any>;

export interface TagNameMap extends HTMLElementTagNameMap {
    "big": HTMLUnknownElement,
    "menuitem": HTMLUnknownElement,
    "keygen": HTMLUnknownElement,
    "webview": HTMLUnknownElement
}

export function html<K extends keyof TagNameMap>(
    query: K, 
    ...children: Children
): TagNameMap[K] {
    query = (query as any).toLowerCase();

    if(!isValidQuery(query)) return;

    const element = document.createElement(query) as TagNameMap[K];
    protectElement(element);

    const attributes = children && typeof(children[0]) == "object" && !(children[0] instanceof HTMLElement)
        ? children[0]
        : null;

    if(attributes) {
        children.shift();

        if(typeof attributes == "object") {
            for(const [key, value] of Object.entries(attributes)) {
                attr(element, key, value);
            }
        }
    }

    if(
        children && 
        Array.isArray(children) && 
        children.length
    ) {
        appendChildren(element, children);
    }

    return element;
}

export const h = html;
export const el = html;