export const txt = (value: string): Text => {
    const fragment = document.createTextNode(value);

    return fragment;
}