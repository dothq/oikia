import * as elements from "./elements";
import * as html from "./html";
import * as children from "./children";
import * as attributes from "./attributes";
import * as fragment from "./fragment";
import * as render from "./render";
import * as dom from "./dom";
import * as ref from "./ref";
import * as protect from "./protect";
import * as config from "./config";

export * from "./elements";
export * from "./html";
export * from "./children";
export * from "./attributes";
export * from "./fragment";
export * from "./render";
export * from "./dom";
export * from "./ref";
export * from "./protect";
export * from "./config";

export default {
    ...elements,
    ...html,
    ...children,
    ...attributes,
    ...fragment,
    ...render,
    ...dom,
    ...ref,
    ...protect,
    ...config
}