const { soma, subtracao, multiplicacao, divisao, ehPar } = require('./script');

test('soma 3 + 3 = 6', () => {
  expect(soma(2, 3)).toBe(5);
});

test('subtracao 5 - 3 = 2', () => {
  expect(subtracao(5, 3)).toBe(2);
});

test('multiplicacao 2 * 3 = 6', () => {
  expect(multiplicacao(2, 3)).toBe(6);
});

test('divisao 10 / 2 = 5', () => {
  expect(divisao(10, 2)).toBe(5);
});

test('numero par', () => {
  expect(ehPar(4)).toBe(true);
});