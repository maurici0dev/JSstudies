new Vue({
  el: "#desafio",
  data: {
    class1: "destaque",
    class2: "",
    class3: "",
    cor: "",
    style: {
      width: "100px",
      height: "100px",
    },
    perigo: true,
    progress: "0",
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.class1 = this.class1 == "destaque" ? "encolher" : "destaque";
      }, 1000);
    },
    setPerigo(event) {
      if (event.target.value == "true") {
        this.perigo = true;
      } else {
        this.perigo = false;
      }
    },
    startProgress() {
      let valor = 0;
      const temporizador = setInterval(() => {
        valor += 2;
        this.progress = `${valor}%`;
        if (valor >= 100) clearInterval(temporizador);
      }, 50);
    },
  },
});
