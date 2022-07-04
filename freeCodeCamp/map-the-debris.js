function calculate(avgAlt, GM, earthRadius) {
  return 2 * Math.PI * Math.sqrt((earthRadius + avgAlt) ** 3 / GM);
}

export function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    return {
      name,
      orbitalPeriod: Math.round(calculate(avgAlt, GM, earthRadius)),
    };
  });
}
