import { appendChildren, Children, OikiaFragment } from ".";

export const fragment = (...children: Children) => {
    const fragment = document.createDocumentFragment();

    appendChildren(fragment, children);

    return fragment as unknown as OikiaFragment;
}

export const _ = fragment;

export const txt = (value: string): Text => {
    const fragment = document.createTextNode(value);

    return fragment;
}