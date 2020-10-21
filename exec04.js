const readlineSync = require('readline-sync');


const preço = readlineSync.question('Digite o preco: ');
const parcela = Number(readlineSync.question('Digite as parcela: '));


const dezPorcento = (preço + 10) /100 ;
const vintePorcento = (preço +  20) /100;
const parcelaproduto = parcelaproduto + dezPorcento
if(parcela == 3 + '%10'){
    console.log(total);
}
const parcelaproduto = parcelaproduto + vintePorcento
else(parcela == 5 +'%20'){
    console.log(total);
}
console.log('Valor Total dos produtos' + parcelaproduto + 'e: ' + dezPorcento);
console.log('Valor Total dos produtos' + parcelaproduto + 'e: ' + vintePorcento);

