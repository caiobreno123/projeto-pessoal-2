
const { adicionarGasto, calcularTotal, limpar } = require('../src/services/gastosService');

beforeEach(() => limpar());

test('deve adicionar gasto', () => {
  expect(adicionarGasto('Mercado', 100)).toBe(true);
});

test('deve calcular total corretamente', () => {
  adicionarGasto('Mercado', 100);
  adicionarGasto('Transporte', 50);
  expect(calcularTotal()).toBe(150);
});
