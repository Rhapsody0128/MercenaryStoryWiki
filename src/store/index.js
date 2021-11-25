import { createStore } from "vuex";
import { heroList } from "../data/hero";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    favoriteHero: JSON.parse(JSON.stringify(heroList)),
  },
  getters: {
    getFavoriteHero(state) {
      return state.favoriteHero;
    },
  },
  mutations: {
    addFavoriteHero(state, data) {
      state.favoriteHero.map((hero) => {
        if (hero.name == data.name) {
          try {
            let find = hero.favorite.indexOf(data.index);
            if (find != -1) {
              hero.favorite.splice(find, 1);
              console.log(hero.favorite);
            } else {
              hero.favorite.push(data.index);
              console.log(hero.favorite);
            }
          } catch (error) {
            console.log(error);
            hero.favorite = [data.index];
          }
        }
      });
    },
    clearFavorite(state) {
      state.favoriteHero = JSON.parse(JSON.stringify(heroList));
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
