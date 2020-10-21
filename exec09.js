'use strict'
const readlineSync = require('readline-sync');

let soma = 0;
let contador = 1;

do {
    soma =+Number(readlineSync.question('Digite um numero:'));
    contador++;
}while (contador <= 20);
console.log(soma);
