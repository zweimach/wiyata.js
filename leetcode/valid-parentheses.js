export function isValid(str) {
  const stack = [];
  const mappings = { "{": "}", "[": "]", "(": ")" };
  const last = () => stack[stack.length - 1];

  for (const st of str) {
    if (mappings[st]) {
      stack.push(st);
    } else if (mappings[last()] === st) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
