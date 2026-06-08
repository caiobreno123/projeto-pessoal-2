
const Sistema=require('../src/sistema');
describe('Sistema',()=>{
 test('adiciona gasto',()=>{const s=new Sistema();s.adicionarGasto('A',10,'X');expect(s.gastos.length).toBe(1);});
 test('calcula total',()=>{const s=new Sistema();s.adicionarGasto('A',10,'X');s.adicionarGasto('B',20,'Y');expect(s.calcularTotal()).toBe(30);});
 test('remove gasto',()=>{const s=new Sistema();s.adicionarGasto('A',10,'X');s.removerGasto(0);expect(s.gastos.length).toBe(0);});
 test('busca categoria',()=>{const s=new Sistema();s.adicionarGasto('A',10,'Alimentação');expect(s.buscarPorCategoria('Alimentação').length).toBe(1);});
});
