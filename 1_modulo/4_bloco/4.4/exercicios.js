//Exercicios 1-5

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };


// // for (let index in info) {
// //     console.log(info[index]);
// // }

// info = {
//     personagem: 'Margarida e Tio Patinhas',
//     origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas'
// }

// info.recorrente = 'Sim'

// console.log(info);

//Exercicios 6-

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

leitor['livrosFavoritos'].push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    }
)

//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '.');

console.log('Julia tem '