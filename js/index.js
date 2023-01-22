//Questão 1//
const peso  = 70;
const altura = 1.78;
const imc = peso/(altura*altura);

if (imc < 18.5){
    console.log(`Seu imc é de ${imc},portanto você está abaixo do peso ideal.`);
}else if (imc >= 18.5 && imc <= 24.99) {
    console.log (`Seu imcé de ${imc},portanto você está dentro da faixa de peso ideal.`);
}else{
    console.log (`Seu imc é de ${imc}, portando você está acima do peso ideal.`);
}

// Questão 2//
let num1 = 8;
let num2 = 2;
const operacao = '#';


if (operacao == '*'){
    console.log (`o resultado da sua multiplicação é: ${num1*num2}`);
}else if (operacao == '/'){
    console.log (`o res=ultado da sua divisão é: ${num1/num2}`);
}else if (operacao == '+'){
    console.log (`O resultado da sua soma é: ${num1+num2} `);
}else if (operacao == '-'){
    console.log (`O resultado da sua subtração é: ${num1-num2}`);
}else {
    console.log(`Operação inválida, por favor digite: *, /, + ou -`);
}

//Questão 3//
const saldo = 1000;
const saque = 225;
const custo = 4.50;

if ((saque+custo)>saldo){
    console.log('O seu saldo é insuficiente para realizar o saque.');
}else if (saque%5 != 0){
    console.log('No momento este caixa tem apenas notas de $5 e $10 reais');
}else if (saque<0){
    console.log ('O valor do saque deve ser positivo.');
}else{
    console.log (`Saque realizado com sucesso! Seu saldo atual é de ${saldo-saque-custo}`);
}

//Questão 4//
const idade= 12;
const peso1 = 60;

if (idade <= 12){
    console.log('Infantil');
}else if (idade <= 16 && peso1 > 40){
    console.log('Juvenil leve');
}else if (idade <= 16 && peso1 <= 45){
    console.log ('Juvenil pesado');
} else if (idade <= 25 && peso1 <= 45){
    console.log ('Sênior leve');
}else if (idade <= 25 && peso1 <= 60){
    console.log ('Sênior médio');
}else if ((idade <= 25 && peso1 > 60)){
    console;log ('Sênior pesado');
}else{
    console.log ('Veterano');
}

//Questão 5//
const velocidade = 84;
const velocidadepermitida = 80;

if (velocidade > velocidadepermitida){
    console.log (`Você estava à ${velocidade}, a velocidade máxima permitida é de ${velocidadepermitida}, portanto dua multa é no valor de:$ ${(velocidade-velocidadepermitida)*5}`)
}else{
    console.log ('Você está dentro da velocidade permitida, tenha uma boa viagem!')
}