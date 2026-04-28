function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return b !== 0 ? a / b : null;
}

function ehPar(numero) {
  return numero % 2 === 0;
}

module.exports = { soma, subtracao, multiplicacao, divisao, ehPar };