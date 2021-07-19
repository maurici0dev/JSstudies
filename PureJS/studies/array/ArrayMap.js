const nums = [1, 2, 3, 4, 5];

let dobroNums = nums.map(function (elem) {
  return elem * 2;
});

console.log(dobroNums);

const soma10 = (x) => x + 10;
const triplo = (x) => x * 3;
const paraDinheiro = (x) => `R$ ${parseFloat(x).toFixed(2).replace(".", ",")}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);

// Carrinho
const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

const precos1 = carrinho.map((produto) => JSON.parse(produto).preco);
console.log(precos1);

// Carrinho usando função criada
Array.prototype.map2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const precos2 = carrinho.map2((produto) => JSON.parse(produto).preco);
console.log(precos2);
