import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import heroCard from "./components/heroCard.vue";
import tag from "./components/tag.vue";

loadFonts();

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .component("heroCard", heroCard)
  .component("tag", tag)
  .mount("#app");
