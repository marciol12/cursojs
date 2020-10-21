const readlineSync = require('readline-sync');


const primeiroNumero = Number(readlineSync.question('Digite o primeiro numero: '));
const segundoNumero = Number(readlineSync.question('Digite o segundo numero: '));
const terceiroNumero = Number(readlineSync.question('Digite o terceiro numero: '));


const media = (primeiroNumero + segundoNumero + terceiroNumero) / 3

console.log('A media e: ' + media);
