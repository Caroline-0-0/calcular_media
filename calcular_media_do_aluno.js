
let nome = prompt("Digite o nome do aluno:");

let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));

const calcular_media = (n1 + n2 + n3) / 3;

if (calcular_media >= 6) {

    console.log(`${nome} está aprovado(a)! com ${calcular_media.toFixed(2)} de média`);
} else {
    console.log(`${nome} está reprovado(a)! com ${calcular_media.toFixed(2)} de média`);
}