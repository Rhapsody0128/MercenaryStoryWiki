import { createStore } from "vuex";
import { heroList } from "../data/hero/index";
import { armyList } from "../data/army/index";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    favoriteHero: JSON.parse(JSON.stringify(heroList)),
    favoriteArmy: JSON.parse(JSON.stringify(armyList)),
  },
  getters: {
    getFavoriteHero(state) {
      return state.favoriteHero;
    },
    getFavoriteArmy(state) {
      return state.favoriteArmy;
    },
    getFavoriteLength(state) {
      let length = [0, 0, 0];
      state.favoriteHero.map((hero) => {
        if (hero.favorite) {
          hero.favorite.map((data) => {
            length[data - 1]++;
          });
        }
      });
      state.favoriteArmy.map((army) => {
        if (army.favorite) {
          army.count.map((item) => {
            length[item.index - 1] += item.count;
          });
        }
      });
      return length;
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
            } else {
              hero.favorite.push(data.index);
            }
          } catch (error) {
            hero.favorite = [data.index];
          }
        }
      });
    },
    clearFavorite(state) {
      state.favoriteHero = JSON.parse(JSON.stringify(heroList));
    },
    addFavoriteArmy(state, data) {
      state.favoriteArmy.map((army) => {
        if (army.name == data.name) {
          try {
            let find = army.favorite.indexOf(data.index);
            if (find != -1) {
              army.favorite.splice(find, 1);
            } else {
              army.favorite.push(data.index);
            }
          } catch (error) {
            army.favorite = [data.index];
          }
        }
      });
    },
    addFavoriteArmyCount(state, data) {
      state.favoriteArmy.map((army) => {
        if (army.name == data.name) {
          try {
            let find = army.count.find((army) => {
              return army.index == data.index;
            });
            if (find) {
              find = {
                index: data.index,
                count: data.count,
              };
              army.count[army.indexOf(find)] = find;
            } else {
              army.count.push({
                index: data.index,
                count: data.count,
              });
            }
          } catch (error) {
            army.count = [
              {
                index: data.index,
                count: data.count,
              },
            ];
          }
        }
      });
    },
    clearFavoriteArmy(state) {
      state.favoriteArmy = JSON.parse(JSON.stringify(armyList));
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
