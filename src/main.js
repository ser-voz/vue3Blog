import {createApp} from "vue";
import App from "./App.vue";
import components from "./components/UI";
import router from "./router";
import VIntersection from "./directives/VIntersection.js";

const app = createApp(App);

components.forEach((ui) => {
    app.component(ui.name, ui);
});

app
    .directive('intersection', VIntersection)
    .use(router)
    .mount("#app");
