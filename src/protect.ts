import { INNER_HTML_DEPRECATION } from "./errors";

export const protectElement = (target: HTMLElement | Node | Element) => {
    try {
        if(
            typeof target == "object" && 
            "innerHTML" in target &&
            (
                (window as any).$__OIKIA__OPTIONS &&
                (window as any).$__OIKIA__OPTIONS.allowInnerHTML == false
            )
        ) {
            Object.defineProperty(target, "innerHTML", {
                set: (value: string) => {
                    console.warn(INNER_HTML_DEPRECATION());
                    
                    return undefined;
                }
            })
        }
    } catch(e) {}
}