// Imprimir todos os números pares entre 0 e 100 usando FOR Tradicional
// Obs.: Nesse caso não é possivel usar o i++

for (let index = 2; index <= 100; index += 2) {
  console.log(index);
}

console.log("---");

let numeros = [3, 7, 13, 9, 100, 145, 123, 3];

for (numero of numeros) {
  console.log(numero * 3);
}
