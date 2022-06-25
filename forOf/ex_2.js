// O FOR OF nos permite 'caminhar' por todos os elementos do array, do primeiro até o ultimo, sempre nessa sequencia e tem como resposta sempre o valor de cada posição do array
let arquivoTexto = "Rodrigo?Fabiana?Arthur?Joussemar?Pétala";
let arrayNomes = arquivoTexto.split("?");
let novaString = "";

for (let nome of arrayNomes) {
  novaString += nome + "%";
}

console.log(novaString);
