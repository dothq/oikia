import { OikiaElement, txt } from ".";
import { protectElement } from "./protect";

export function appendChild<T extends Node>(target: OikiaElement, child: T): T {
    if(child instanceof HTMLElement) {
        return target.appendChild(child);
    } else {
        const fragment = txt(child.toString());
        return target.appendChild(fragment as any);
    }
}

export const appendChildren = (target: OikiaElement, children: any) => {
    children.forEach(child => {
        appendChild(target, child);
    });
}