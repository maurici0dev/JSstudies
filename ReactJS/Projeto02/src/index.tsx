import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Criação de site estático",
          type: "deposit",
          category: "desenvolvimento",
          amount: 720,
          createdAt: new Date("2021-11-11 15:00:00"),
        },
        {
          id: 2,
          title: "Internet",
          type: "descont",
          category: "pagamento de conta",
          amount: 200,
          createdAt: new Date("2021-11-12 8:30:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
