
const Sistema = require('./sistema');
const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const sistema = new Sistema();

function menu(){
 console.log('\n1-Adicionar\n2-Listar\n3-Total\n4-Remover\n5-Sair');
 rl.question('Opção: ', op=>{
   if(op==='1'){
     rl.question('Descrição: ', d=>{
       rl.question('Valor: ', v=>{
         rl.question('Categoria: ', c=>{
           sistema.adicionarGasto(d, Number(v), c);
           menu();
         });
       });
     });
   } else if(op==='2'){ console.log(sistema.listarGastos()); menu(); }
   else if(op==='3'){ console.log('Total:', sistema.calcularTotal()); menu(); }
   else if(op==='4'){ rl.question('Índice: ', i=>{ sistema.removerGasto(Number(i)); menu();});}
   else { rl.close(); }
 });
}
menu();
