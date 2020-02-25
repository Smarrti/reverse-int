module.exports = function reverse (n) {
  if (n < 0) {
    n *= -1;
  }
  n = String(n);
  n = n.split('').reverse().join('');
  return Number(n);
}
