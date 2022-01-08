export const INVALID_HTML_QUERY_CHAR = (s: string) => 
    `Oikia: The provided query '${s}' contains invalid characters.`

export const INVALID_HTML_QUERY_UNKNOWN = (s: string, domError: string) => 
    `Oikia: The provided query '${s}' was invalid. ${domError}.`

export const CANNOT_REPLACE_DOCUMENT = () => 
    `Oikia: You cannot render to the document if you are in replace mode.`

export const INNER_HTML_DEPRECATION = () =>
    `Oikia: Element.innerHTML is deprecated and should not be used. If you understand the risks of using innerHTML, you can set Oikia.config({ allowInnerHTML: true }) before rendering an application.`

export const INNER_HTML_ALLOWED_WARNING = () =>
    `Oikia: The preference 'allowInnerHTML' is enabled in your application. If you don't properly sanitise your input you could leave your application exposed to Cross-Site-Scripting (XSS) vulnerabilities.`

export const EVENT_HANDLER_SHOULD_BE_CALLABLE = (target: HTMLElement, event: string) =>
    `Oikia: The '${event.toLowerCase()}' handler on ${target} is a string. Expected a function.`

export const MISSING_RENDER_METHOD = (name: string) =>
    `Oikia: Cannot render '${name}' component as the render() method is not present.`