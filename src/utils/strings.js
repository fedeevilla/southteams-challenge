export const removeAccents = (str) => {
  const accents = "ÁáÉéÍíÓóÚú";
  const accentsOut = "AaEeIiOoUu";
  return str
    .split("")
    .map((letter) => {
      const accentIndex = accents.indexOf(letter);
      return accentIndex !== -1 ? accentsOut[accentIndex] : letter;
    })
    .join("");
};
