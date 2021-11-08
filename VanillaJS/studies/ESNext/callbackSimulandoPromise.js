// Sem promise
const http = require("http");
const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  http.get(url, (res) => {
    let resultado = "";
    res.on("data", (dados) => {
      resultado += dados;
    });
    res.on("end", () => {
      callback(JSON.parse(resultado));
    });
  });
};

let nomes = [];
getTurma("A", (alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  getTurma("B", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
    getTurma("C", (alunos) => {
      nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
      //   console.log(nomes);
    });
  });
});

// Com promise
const getTurmaPromise = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";
      res.on("data", (dados) => {
        resultado += dados;
      });
      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

// Chamar com codigo sujo
// let nomes2 = [];
// getTurmaPromise("A").then((alunos) => {
//   nomes2 = nomes2.concat(alunos.map((a) => `A: ${a.nome}`));
//   getTurmaPromise("B").then((alunos) => {
//     nomes2 = nomes2.concat(alunos.map((a) => `B: ${a.nome}`));
//     getTurmaPromise("C").then((alunos) => {
//       nomes2 = nomes2.concat(alunos.map((a) => `C: ${a.nome}`));
//       console.log(nomes2);
//     });
//   });
// });

// Forma correta de chamar com codigo mais limpo
Promise.all([getTurmaPromise("A"), getTurmaPromise("B"), getTurmaPromise("C")])
  .then((turmas) => [].concat(...turmas))
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nome) => console.log(nome));
