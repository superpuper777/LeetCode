export const createAlphabet  = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
    return alphabet;
}
console.log(createAlphabet());