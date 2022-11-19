/*const alunosGama = ["Paula", "Maria", "jhon", "Clara"]

console.log(alunosGama[1])

//operador spread (...)
const alunosx = [...alunosGama, "Eric", "Gabriel"]

console.log (alunosx)

//metodo de interação
for (let i=0; i<alunosx.length; i++){
  console.log (alunosx[i])
}


//map : retorna um novo array sem aletrar o array original

const alunosGama2 = ["Paula", "Maria", "jhon", "Clara"]

alunosGama2.map (aluno => console.log (aluno))

*/
//filter - retorna um novo arrys com os elementos filtrados , ele é uma função, por isso chama com .filter

const numeros = [23, 66, 27, 934, 3,  632, 12, 236]

numerosimpares = numeros.filter(numeros => numeros%2 != 0 )
console.log (numerosimpares)

numerosPar = numeros.filter(numeros => numeros%2 != 1 )
console.log (numerosPar)


//find: econtra e retorna o primeiro elemento igual ao elemento passado por parametro.

const produts = ["Computador", "Caixa de som", "Monitor", "cadeira", "mouse"]

const encontraMouse = produts.find (produts=> produts === "mouse")

console.log (encontraMouse)

//sort - ordena os arrays

const num = [92, 42, 45, 66, 89, 32,1, 110 ]

const crescent = num.sort ((a, b) => a-b )
console.log (crescent)

 const deCrescent = num.sort((a, b) => b-a)
console.log (deCrescent)

//reduce - reduz o array a um resultado de uma operação matematica

const numbers = [1,7,2,66]

const soma = numbers.reduce((valorAtual, valorAnterior) => {
  return valorAnterior+valorAtual
})
console.log(soma)
