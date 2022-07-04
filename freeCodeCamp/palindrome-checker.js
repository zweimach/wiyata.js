export function palindrome(str) {
  const cleanStr = str.replace(/[^0-9a-z]/gi, "").toLowerCase();

  return cleanStr === cleanStr.split("").reverse().join("");
}
