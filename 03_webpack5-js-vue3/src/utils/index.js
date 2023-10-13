export function add() {
  return [...arguments].reduce((pre, cur) => pre + cur, 0)
}
