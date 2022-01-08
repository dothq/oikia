import { isValidQuery } from "./utils/html"
import { appendChild } from "./children";
import { appendChildren, attr, OikiaElement, protectElement } from ".";
import { MISSING_RENDER_METHOD } from "./errors";

export type Children = any | string | OikiaElement | Record<any, any>;

export interface TagNameMap extends HTMLElementTagNameMap {
    "big": HTMLUnknownElement,
    "menuitem": HTMLUnknownElement,
    "keygen": HTMLUnknownElement,
    "webview": HTMLUnknownElement
}

export function html<K extends keyof TagNameMap>(
    query: K | typeof Component, 
    ...children: Children
): TagNameMap[K] {
    let element: TagNameMap[K];

    const attributes = children && typeof(children[0]) == "object" && !(children[0] instanceof HTMLElement)
        ? children[0]
        : null;

    if(typeof query == "function") {
        const name = (query as any).name;
        const component = new query(attributes) as any;

        if("render" in component) {
            element = component.render();

            protectElement(element);

            if(attributes) {
                children.shift();
            }
        } else {
            console.warn(MISSING_RENDER_METHOD(name));
            return;
        }
    } else {
        query = (query as any).toLowerCase();

        if(!isValidQuery(query)) return;
    
        element = document.createElement(query as string) as TagNameMap[K];

        protectElement(element);

        if(attributes) {
            children.shift();
    
            if(typeof attributes == "object") {
                for(const [key, value] of Object.entries(attributes)) {
                    attr(element, key, value);
                }
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

export class Component {
    private __$OIKIA__PROPS: any = {};

    public get props() {
        return this.__$OIKIA__PROPS
    }

    public set props(_: any) {}

    private __$OIKIA__COMPONENT = 1;

    public constructor(props) {
        this.__$OIKIA__PROPS = props;
    }
}