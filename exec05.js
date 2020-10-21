const readlineSync = require('readline-sync');

const primeiraNota = Number(readlineSync.question('Digite a nota :'));
const segundaNota = Number(readlineSync.question('Digite a nota :'));
const terceiraNota = Number(readlineSync.question('Digite a nota :'));

const nomeAluno = readlineSync.question('Digite o nome do aluno:');

const media = (primeiraNota + segundaNota + terceiraNota) / 3

const alunoEstaAprovado = media >=8;

console.log(`${alunoEstaAprovado ?'Aprovado':'Reprovado'} ${nomeAluno} media: ${media}`);