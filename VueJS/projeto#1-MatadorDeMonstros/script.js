new Vue({
  el: "#app",
  data: {
    running: false,
    player: 100,
    monster: 100,
    logs: [],
  },
  computed: {
    hasResult() {
      return this.player == 0 || this.monster == 0;
    },
  },
  methods: {
    start() {
      this.running = true;
      this.player = 100;
      this.monster = 100;
      this.logs = [];
    },
    attack(special) {
      this.hurt("monster", 5, 10, special, "Jogador", "Monstro", "player");
      if (this.monster > 0) {
        this.hurt("player", 7, 12, false, "Monstro", "Jogador", "monster");
      }
    },
    healing(min, max) {
      const heal = this.getRandom(min, max);
      this.player = Math.min(this.player + heal, 100);
      this.registerLog(`Jogador ganhou ${heal} de vida`, "heal");
    },
    healAndHurt() {
      this.healing(10, 15);
      this.hurt("player", 7, 12, false, "Monstro", "Jogador", "monster");
    },
    hurt(cur, min, max, special, source, target, cls) {
      const plus = special ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus);
      this[cur] = Math.max(this[cur] - hurt, 0);
      this.registerLog(`${source} atingiu ${target} com ${hurt} de dano`, cls);
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
    },
  },
  watch: {
    hasResult(value) {
      if (value) this.running = false;
    },
  },
});
