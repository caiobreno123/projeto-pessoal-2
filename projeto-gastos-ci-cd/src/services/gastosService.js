
let gastos = [];

function adicionarGasto(descricao, valor) {
  if (!descricao || valor <= 0) return false;
  gastos.push({ descricao, valor });
  return true;
}

function calcularTotal() {
  return gastos.reduce((s, g) => s + g.valor, 0);
}

function limpar() {
  gastos = [];
}

module.exports = { adicionarGasto, calcularTotal, limpar };
