import { INNER_HTML_ALLOWED_WARNING } from "./errors";

export interface OikiaOptions {
    allowInnerHTML: boolean
}

export const config = (options: OikiaOptions) => {
    if(options.allowInnerHTML == true) {
        console.warn(INNER_HTML_ALLOWED_WARNING())
    }

    Object.defineProperty(window, "$__OIKIA__OPTIONS", {
        get: () => {
            return Object.freeze(options);
        },
        set: () => {
            return undefined;
        }
    })
}