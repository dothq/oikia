import { INNER_HTML_DEPRECATION } from "./errors";

export const protectElement = (target: HTMLElement | Node | Element) => {
    try {
        if(
            typeof target == "object" && 
            "innerHTML" in target &&
            (
                !("allowInnerHTML" in (window as any).__$OIKIA__OPTIONS) ||
                !(window as any).__$OIKIA__OPTIONS.allowInnerHTML ||
                (window as any).__$OIKIA__OPTIONS.allowInnerHTML == false
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