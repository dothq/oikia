import { INVALID_HTML_QUERY_CHAR, INVALID_HTML_QUERY_UNKNOWN } from "../errors";

export const isValidQuery = (query: any) => {
    let tmp: HTMLElement;

    try {
        tmp = document.createElement(query);
    } catch(e) {
        switch(e.code) {
            case DOMException.INVALID_CHARACTER_ERR:
                console.error(INVALID_HTML_QUERY_CHAR(query));
                break;
            default:
                console.error(INVALID_HTML_QUERY_UNKNOWN(query, e.message));
                break;
        }

        return false;
    }

    tmp = null;

    return true;
}