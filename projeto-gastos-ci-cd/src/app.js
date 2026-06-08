
const { adicionarGasto, calcularTotal } = require('./services/gastosService');

adicionarGasto('Mercado', 100);
console.log('Total:', calcularTotal());
