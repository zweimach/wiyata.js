export function integerToRoman(num) {
  const romanNumerals = {
    0: "I",
    1: "V",
    2: "X",
    3: "L",
    4: "C",
    5: "D",
    6: "M",
  };
  const parseRoman = (str, pos) => {
    switch (str) {
      case "1":
        return romanNumerals[2 * pos];
      case "2":
        return romanNumerals[2 * pos].repeat(2);
      case "3":
        return romanNumerals[2 * pos].repeat(3);
      case "4":
        return romanNumerals[2 * pos] + romanNumerals[2 * pos + 1];
      case "5":
        return romanNumerals[2 * pos + 1];
      case "6":
        return romanNumerals[2 * pos + 1] + romanNumerals[2 * pos];
      case "7":
        return romanNumerals[2 * pos + 1] + romanNumerals[2 * pos].repeat(2);
      case "8":
        return romanNumerals[2 * pos + 1] + romanNumerals[2 * pos].repeat(3);
      case "9":
        return romanNumerals[2 * pos] + romanNumerals[2 * (pos + 1)];
      default:
        return "";
    }
  };

  return num
    .toString()
    .split("")
    .reverse()
    .map((num, pos) => parseRoman(num, pos))
    .reverse()
    .join("");
}
