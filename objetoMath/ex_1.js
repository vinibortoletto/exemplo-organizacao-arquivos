// Como pegar o maior numero de um array de forma rápida (uma das soluções possiveis!!)
let numeros = [3, 7, 13, 9, 100, 145, 123, 3];

let maiorNumero = Math.max.apply(null, numeros);
console.log(maiorNumero);
