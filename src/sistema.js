class Sistema {
  constructor() {
    this.gastos = [];
  }

  adicionarGasto(descricao, valor, categoria) {
    this.gastos.push({ descricao, valor, categoria });
  }

  calcularTotal() {
    return this.gastos.reduce((t, g) => t + g.valor, 0);
  }
}

module.exports = Sistema;