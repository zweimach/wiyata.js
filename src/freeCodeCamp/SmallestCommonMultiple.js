function gcd(x, y) {
  let a = Math.abs(x);
  let b = Math.abs(y);

  while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }

  return a || b;
}

function lcm(a, b) {
  return a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b);
}

export function smallestCommons(arr) {
  let [a, b] = arr;

  if (a > b) {
    b = [a, (a = b)][0];
  }

  const mid = ((b + a) / 2) | 0;

  let result = 1;

  for (let i = a, j = b; i < mid + 1 && j > mid - 1; i++, j--) {
    result = lcm(lcm(i, result), lcm(result, j));
  }

  return result;
}
