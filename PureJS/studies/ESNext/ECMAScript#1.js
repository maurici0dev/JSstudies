// let e const
{
  var a = 2;
  let b = 3;
  console.log(b);
}
console.log(a);
// variavel b não pode ser acessada fora do bloco
// console.log(b);

// Template string
const produto = "iPad";
console.log(`${produto} é caro`);

// Destructuring
const [primeira, segunda, ...resto] = "Cod3r";
console.log(primeira, segunda, resto);

const [x, y] = [1, 2];
console.log(x + y);

const { idade: i, nome: n } = { nome: "Ana", idade: 9 };
console.log(i, n);
