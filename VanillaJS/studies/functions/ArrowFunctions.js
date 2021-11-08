let dobro1 = function (a) {
  return 2 * a;
};

dobro2 = (a) => {
  return 2 * a;
};

dobro3 = (a) => 2 * a;

console.log(dobro1(5));
console.log(dobro2(5));
console.log(dobro3(5));

let ola1 = function () {
  return "Olá 1";
};

ola2 = () => "Ola 2";
ola3 = _ => "Ola 3";

console.log(ola1());
console.log(ola2());
console.log(ola3());

/*
function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa();
*/

let comparaThis = function (param) {
  console.log(this === param);
};

comparaThis(global);

const obj = {};
comparaThis = comparaThis.bind(obj);
comparaThis(global);
comparaThis(obj);

let comparaThisArrow = (param) => console.log(this === param);
comparaThisArrow(global);
comparaThisArrow(this);
comparaThisArrow(module.exports);

// Bind não funciona em arrow functions
comparaThisArrow = comparaThisArrow.bind(obj);
comparaThisArrow(obj);
