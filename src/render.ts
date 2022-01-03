import { OikiaElement } from ".";
import { CANNOT_REPLACE_DOCUMENT } from "./errors";

export const render = (
    component: OikiaElement | (() => OikiaElement), 
    element: HTMLElement, 
    replace?: boolean
) => {
    if(!("__$OIKIA__OPTIONS" in window)) {
        (window as any).__$OIKIA__OPTIONS = {};
    }

    if(!("__$OIKIA__REFERENCES" in window)) {
        (window as any).__$OIKIA__REFERENCES = new Map();
    }

    if(typeof component == "function") component = component();

    if(replace) {
        if((element.parentNode as any).outerHTML == undefined) {
            return console.error(CANNOT_REPLACE_DOCUMENT())
        }

        element.replaceWith(component);
    } else {
        element.appendChild(component);
    }
}