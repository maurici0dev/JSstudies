const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar = pessoa.falar;

falar(); // Conflito entre paradigmas: funcional e POO

const falarPessoa = pessoa.falar.bind(pessoa);
falarPessoa();

function Pessoa() {
  this.idade = 0;

  /* Metodo 2 de correção
  const self = this;
  */

  setInterval(
    function () {
      this.idade++;
      console.log(this.idade);
    } /* Metodo 1 de correção .bind(this) */,
    1000
  );
}

new Pessoa();
