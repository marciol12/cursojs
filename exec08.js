'use strict'
const readlineSync = require('readline-sync');
 
let soma = 0;
let contador = 1;

while (contador <= 20){
    soma += Number(readlineSync.question('Digite um numero:'));
    contador++;
}
console.log(soma);
