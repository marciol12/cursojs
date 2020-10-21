'use strict'
const readlineSync = require('readline-sync');

const cardapio = {
    "100":{
        nome: "Cachorro Quente",
        valor: 1.70
    },
    "101":{
        nome: "Bauru Simples",
        valor: 2.30
    },
    "102":{
        nome: "Bauru Com Ovo",
        valor: 2.60
    },
    "103":{
        nome: "Hamburguer",
        valor: 2.40
    },
    "104":{
        nome: "Cheeseburguer",
        valor: 2.50
    },
    "105":{
        nome: "refrigerante",
        valor: 1
    }
}
    let valortotal = 0;

    while (true){
        const codigo = readlineSync.question('Digite um codigo:');
        if(codigo ==='0'){
            console.log(valortotal);
            break;
        }
        if (cardapio[codigo]){
            valortotal += cardapio[codigo].valor;
        }else{
            console.log('codigo de produto invalido');
        }
    }