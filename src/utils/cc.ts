export const camelToKebab = (str: string) => {
    return str.split("").map((letter, i) => {
        return letter.toUpperCase() === letter
            ? `${i !== 0 ? "-" : ""}${letter.toLowerCase()}`
            : letter;
    }).join("").replace(/_/g, "");
}

export const kebabToCamel = (str: string) => {
    return str
        .replace(
            /-./g, 
            m => m[1].toUpperCase()
        )
 }