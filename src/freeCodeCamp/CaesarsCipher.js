const listRot13 = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M"
};

function caesarChiper(char) {
  if (isLetter(char)) {
    return listRot13[char];
  }
  return char;
}

function isLetter(char) {
  return char.toLowerCase() !== char.toUpperCase();
}

export function rot13(str) {
  return str
    .split("")
    .map(caesarChiper)
    .join("");
}
