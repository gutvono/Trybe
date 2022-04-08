// Exercício 1

// let fatorial = 1
// for (let index = 1; index < 11; index += 1) {
//     fatorial = fatorial * index
// }
// console.log(fatorial)

// Exercício 2

// let word = "tryber"
// let newword = ""
// for (let index = word.length - 1; index >= 0; index -= 1) {
//     newword += word[index]
// }
// console.log(newword);

// Exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = ""
for (index = 0; index <= array.length; index += 1) {
    if (index.length > index.length - 1) {
        maiorPalavra = index
    }
}
console.log(maiorPalavra);