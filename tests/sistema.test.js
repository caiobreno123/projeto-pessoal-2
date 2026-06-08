const Sistema = require('../src/sistema');

test('Deve adicionar um gasto', () => {
  const sistema = new Sistema();
  sistema.adicionarGasto('Mercado', 100, 'Alimentação');
  expect(sistema.gastos.length).toBe(1);
});

test('Deve calcular total de gastos', () => {
  const sistema = new Sistema();
  sistema.adicionarGasto('Mercado', 100, 'Alimentação');
  sistema.adicionarGasto('Uber', 50, 'Transporte');
  expect(sistema.calcularTotal()).toBe(150);
});