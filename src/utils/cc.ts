export const camelToKebab = (str: string) => {
    return str.split("").map((letter, i) => {
        return letter.toUpperCase() === letter
            ? `${i !== 0 ? "-" : ""}${letter.toLowerCase()}`
            : letter;
    }).join("").replace(/_/g, "");
 }