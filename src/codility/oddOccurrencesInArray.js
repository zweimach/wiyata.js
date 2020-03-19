export function oddOccurrencesInArray(a) {
  let o = {};
  for (const m of a) {
    if (o[m]) {
      o[m] += 1;
    } else {
      o[m] = 1;
    }
  }
  for (const [k, v] of Object.entries(o)) {
    if (v % 2 !== 0) {
      return parseInt(k);
    }
  }
}
