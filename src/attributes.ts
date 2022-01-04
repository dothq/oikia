import { css, OikiaElement } from ".";
import { EVENT_HANDLER_SHOULD_BE_CALLABLE } from "./errors";
import { camelToKebab, kebabToCamel } from "./utils/cc"
import { setReference } from "./utils/internal";

export const attr = (target: OikiaElement, key: string, value: any) => {
    if(key == "ref") {
        setReference(value.$__OIKIA__REF__ID, target);
        delete value.$__OIKIA__REF__ID;

        return;
    };

    if(key.startsWith("on")) {
        if(typeof value !== "function") return console.warn(EVENT_HANDLER_SHOULD_BE_CALLABLE(target, key));

        const htmlEvent = key.split("on")[1].toLowerCase();

        return target.addEventListener(
            htmlEvent, 
            (...args: any) => {
                (value as Function).call(this, ...args);
            }
        );
    }

    if(key == "style" && typeof value == "object") {
        for(const [key, val] of Object.entries(value)) {
            css(target, key, val);
        }
        
        return;
    }

    target.setAttribute(
        camelToKebab(key),
        value
    )
}