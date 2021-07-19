const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
  }, 0);

console.log(resultado);

const todosBolsistas = alunos
  .map((a) => a.bolsista)
  .reduce(function (ac, at) {
    console.log(ac, at);
    return ac && at;
  });

console.log(todosBolsistas);

const alguemBolsista = alunos
  .map((a) => a.bolsista)
  .reduce(function (ac, at) {
    console.log(ac, at);
    return ac || at;
  });

console.log(alguemBolsista);

// Propria versão de reduce
Array.prototype.reduce2 = function (callback, valorInicial) {
  const indiceInicial = valorInicial ? 0 : 1;
  let acumulador = valorInicial || this[0];
  for (let i = indiceInicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(soma, 21));
