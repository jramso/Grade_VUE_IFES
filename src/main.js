import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// 1. Importe o roteador
import router from "./router";

const app = createApp(App);

// 2. Diga ao app para usar o roteador
app.use(router);

app.mount("#app");
