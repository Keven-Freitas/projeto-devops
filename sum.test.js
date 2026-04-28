function soma(a, b) {
  return a + b;
}

test('soma 1 + 2 = 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('soma 5 + 5 = 10', () => {
  expect(soma(5, 5)).toBe(10);
});

test('soma 0 + 0 = 0', () => {
  expect(soma(0, 0)).toBe(0);
});

test('soma números negativos', () => {
  expect(soma(-1, -1)).toBe(-2);
});

test('soma número positivo e negativo', () => {
  expect(soma(10, -5)).toBe(5);
});