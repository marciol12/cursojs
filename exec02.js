const readlineSync = require('readline-sync');


const nomeFuncionario = readlineSync.question('Digite o nome do funcionario: ');
const salarioFuncionario = Number(readlineSync.question('Digite o salario: '));


const dezPorcento = (salarioFuncionario * 10) / 100;
const salarioAtualizado = salarioFuncionario + dezPorcento

console.log('O novo salario do funcionario' + nomeFuncionario + 'eh: ' + salarioAtualizado);