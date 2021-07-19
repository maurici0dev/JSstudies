<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>
    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">Quantidade de portas?</label>
        <input
          type="text"
          name="portsAmount"
          id="portsAmount"
          size="3"
          v-model.number="portsAmount"
        />
      </div>
      <div v-if="!started">
        <label for="selectedPort">Qual porta será premiada?</label>
        <input
          type="text"
          name="selectedPort"
          id="selectedPort"
          size="3"
          v-model.number="selectedPort"
        />
      </div>
      <div v-if="!started">
        <button @click="started = true">Iniciar</button>
      </div>
      <div v-if="started">
        <button @click="started = false">Reiniciar</button>
      </div>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in portsAmount" :key="i">
        <Door :hasGift="i === selectedPort" :number="i" />
      </div>
    </div>
  </div>
</template>

<script>
import Door from "@/components/Door.vue";

export default {
  components: { Door },
  data: function () {
    return {
      started: false,
      portsAmount: 3,
      selectedPort: null,
    };
  },
};
</script>

<style
Gift>
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  color: #fff;
  background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 2px solid #fff4;
  background-color: #0004;
  padding: 20px 30px;
  margin-bottom: 60px;
  border-radius: 22px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.form,
.form input,
.form button {
  margin-bottom: 10px;
  font-size: 2rem;
}

.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>