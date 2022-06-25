// Declarando e trabalhando objetos
let pessoa = {
  nome: "Alexandre Atanes de Jesus",
  idade: 51,
  localNascimento: "Santos",
  apelido: "Athanos",
};

// FOR OF não funciona para caminhar na estrutura de um objeto
// for(chave of pessoa){
//   console.log(chave);
// }

// FOR IN para caminhar por todas as chaves e valores do objeto
for (let i in pessoa) {
  console.log("Chave: ", i, "Valor:", pessoa[i]);
}

console.log("---");

console.log(pessoa.apelido);
console.log(pessoa["apelido"]);
