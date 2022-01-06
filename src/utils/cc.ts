export const camelToKebab = (str: string) => {
    return str
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
        .toLowerCase();
}

export const kebabToCamel = (str: string) => {
    return str
        .replace(
            /-./g, 
            m => m[1].toUpperCase()
        )
 }