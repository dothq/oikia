import { useID } from "@dothq/id";
import { OikiaElement } from ".";
import { getReference } from "./utils/internal";

export interface RefObject<T extends OikiaElement> {
    $__OIKIA__REF__ID: string,
    current?: T
}

export function createRef<T extends OikiaElement>(): RefObject<T> {
    const id = useID(6);

    return {
        $__OIKIA__REF__ID: id,
        get current() {
            return getReference(id) as T;
        }
    }
}