export function binaryGap(n) {
  const bins = n.toString(2).replace(/[0]+$/, "");
  if (!(bins.length > 2 && bins[0] === "1" && bins[bins.length - 1] === "1")) {
    return 0;
  }
  return bins
    .split("1")
    .map((n) => n.length)
    .reduce((acc, x) => (acc < x ? x : acc), 0);
}
