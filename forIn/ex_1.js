// O FOR IN nos permite caminhar por todos os elementos do array, do primeiro até o ultimo, sempre nessa sequencia e podemos pegar o indice e o valor de cada posição sem maiores problemas

let arquivoTexto = "Rodrigo?Fabiana?Arthur?Joussemar?Pétala";
let arrayNomes = arquivoTexto.split("?");

for (let n in arrayNomes) {
  console.log("Index:", n, "Valor do elemento:", arrayNomes[n]);
}
