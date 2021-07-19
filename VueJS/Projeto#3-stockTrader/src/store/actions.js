import Vue from "vue";

export default {
  loadData({ commit }) {
    Vue.prototype.$http("data.json").then((response) => {
      const data = response.data;
      if (data) {
        commit("setStocks", data.stocks);
        commit("setPortfolio", {
          funds: data.funds,
          stockPortfolio: data.stockPortfolio,
        });
      }
    });
  },
};
