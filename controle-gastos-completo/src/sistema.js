
class Sistema{
 constructor(){this.gastos=[];}
 adicionarGasto(descricao,valor,categoria){this.gastos.push({descricao,valor,categoria});}
 listarGastos(){return this.gastos;}
 calcularTotal(){return this.gastos.reduce((a,b)=>a+b.valor,0);}
 removerGasto(i){this.gastos.splice(i,1);}
 buscarPorCategoria(cat){return this.gastos.filter(g=>g.categoria===cat);}
}
module.exports=Sistema;
