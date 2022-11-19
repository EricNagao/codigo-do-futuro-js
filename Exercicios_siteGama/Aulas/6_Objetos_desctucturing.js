const pessoa = {
nome: "Eric",
idade: 30,
cidade: "Sampa",
}

//notação de ponto

console.log(pessoa.nome)

//notação de colchetes

console.log(pessoa[`idade`])



//destructure - desestuturando objetos

const {nome, idade, cidade} = pessoa 

console.log(nome)

console.log(pessoa[`idade`])