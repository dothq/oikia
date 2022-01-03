import { OikiaElement } from "..";

export const getReference = (id: string) => {
    if(!("__$OIKIA__REFERENCES" in window)) {
        (window as any).__$OIKIA__REFERENCES = new Map();
    }

    const refs = (window as any).__$OIKIA__REFERENCES as Map<string, OikiaElement>;

    return refs.get(id);
}

export const setReference = (id: string, value: OikiaElement) => {
    if(!("__$OIKIA__REFERENCES" in window)) {
        (window as any).__$OIKIA__REFERENCES = new Map();
    }

    const refs = (window as any).__$OIKIA__REFERENCES as Map<string, OikiaElement>;

    return refs.set(id, value);
}