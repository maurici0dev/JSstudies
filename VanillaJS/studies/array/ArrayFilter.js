const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de vidro", preco: 12.49, fragil: true },
  { nome: "Copo de plástico", preco: 18.99, fragil: false },
];

// Retorna produtos mais caros
console.log(
  produtos.filter(function (p) {
    return p.preco > 500;
  })
);

// Retorna produtos frageis
console.log(
  produtos.filter(function (p) {
    return p.fragil;
  })
);

// Retorna produtos não frageis
console.log(
  produtos.filter(function (p) {
    return !p.fragil;
  })
);

// Propria versão de filter
Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

console.log(
  produtos.filter2(function (p) {
    return p.preco > 500;
  })
);
