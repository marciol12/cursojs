const readlineSync = require('readline-sync');

const primeiroNumero = Number(readlineSync.question('Digite o primeiro numero:'));
const segundoNumero = Number(readlineSync.question('Digite o segundo numero:'));

const codigo = Number(readlineSync.question('Digite o codigo de selecao:'));

switch (codigo){
    case 1:
        console.log(primeiroNumero + segundoNumero)
        break;
    case 2:
        console.log(primeiroNumero * segundoNumero)
        break;
    case 3:
        console.log(primeiroNumero / segundoNumero)
        break;
    default:
        console.log('Codigo de entrada invalido');
}