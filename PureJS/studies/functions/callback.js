const fabricantes = ["Mercedes", "Audi", "BMW"];
function imprimir(nome, i) {
  console.log(`${i + 1}. ${nome}`);
}
fabricantes.forEach(imprimir);
fabricantes.forEach(fab => {
  console.log(fab);
});

// Diferença enter usar e não usar callback
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback
const notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}
console.log(notasBaixas1);

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});
console.log(notasBaixas2);

// Com callback e arrow function
const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);

// Exemplo de callback no browser
document.getElementsByTagName("body")[0].onclick = function (event) {
  console.log(event);
};
