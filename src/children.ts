import { OikiaElement, txt } from ".";
import { protectElement } from "./protect";

export function appendChild<T extends Node>(target: OikiaElement | DocumentFragment, child: T): T {
    // Empty elements like <br> can use the br syntax without calling the function
    if(typeof child == "function") child = (child as any)();

    protectElement(child);

    if(child instanceof HTMLElement) {
        return target.appendChild(child);
    } else {
        const fragment = txt(child.toString());
        return target.appendChild(fragment as any);
    }
}

export const appendChildren = (target: OikiaElement | DocumentFragment, children: any) => {
    children.forEach(child => {
        appendChild(target, child);
    });
}