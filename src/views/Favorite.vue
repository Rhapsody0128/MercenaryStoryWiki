<template lang="pug">
.favorite
  .row(v-for='(heros,index) in herosList')
    v-sheet.p.mt.rounded-lg(v-if='heros.length>0' elevation="3" color='rgba(0,0,0,0)')
      div
        span.title 隊伍{{index+1}}
        svg(:class='"favoriteTpye" + (index+1)' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24")      
          path(d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z")
        span.ml {{getFavoriteLength[index]}}/20人
      .cardList
        heroCard(:data='hero' :showSkill='true'  v-for='hero in heros' )
      .armyCardList
        .armyCard(v-for='army in armyList[index]')
          soldierCard(:data='army' :showSkill='true' v-for='i in getCount(army,index+1)')


</template>
<script>
export default {
  data() {
    return {
      hero: {},
      herosList: [],
      armyList: [],
    };
  },
  computed: {
    favoriteHero() {
      return this.$store.getters.getFavoriteHero;
    },
    favoriteArmy() {
      return this.$store.getters.getFavoriteArmy;
    },
    getFavoriteLength() {
      return this.$store.getters.getFavoriteLength;
    },
  },
  methods: {
    getData() {
      let result = [[], [], []];
      this.favoriteHero.map((hero) => {
        if (hero.favorite) {
          hero.favorite.map((data) => {
            result[data - 1].push(hero);
          });
        }
      });
      this.herosList = result;
      let armyResult = [[], [], []];
      this.favoriteArmy.map((army) => {
        if (army.favorite) {
          army.favorite.map((data) => {
            armyResult[data - 1].push(army);
          });
        }
      });
      this.armyList = armyResult;
    },
    getCount(data, index) {
      let find = data.count.find((item) => {
        return item.index == index;
      });
      if (find) {
        return find.count;
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style lang="stylus" scoped>
.cardList
  position: relative
.armyCardList
  display: inline-block
  width 100%
  .armyCard
    display: inline
    width 100%
</style>
