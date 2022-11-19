const filmes = [
{
ID: 1 ,
titulo: "clock work",
descrição: "laranja mecanica",
duração: 120,
},
{
  ID: 2,
  titulo: "soul",
  descrição: "como falar de sua soul",
  duração: 90,
  },
  {
    ID: 3,
    titulo: "mac donalds",
    descrição: "como montar seu lanche",
    duração: 130,
    },
]

const {ID, titulo, descrição, duração} = filmes

filmes.map (filmes => console.log (filmes.descrição))