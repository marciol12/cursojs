const readlineSync = require('readline-sync');


const primeiroNumero = Number(readlineSync.question('Digite o primeiro numero: '));
const segundoNumero = Number(readlineSync.question('Digite o segundo numero: '));


if(primeiroNumero === segundoNumero) {
    const soma = primeiroNumero + segundoNumero;

    console.log('A soma eh: ' + soma);
} else {
    const mult = primeiroNumero * segundoNumero;
    console.log('A multiplicacao e: ' + mult);
}
