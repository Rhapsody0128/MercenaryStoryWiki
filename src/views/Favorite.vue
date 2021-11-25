<template lang="pug">
.favorite
  .row
    v-sheet.p.mt.rounded-lg(v-for='(heros,index) in herosList' elevation="10" color='rgba(0,0,0,0)' )
      div
        span.title 隊伍{{index+1}}
        svg(:class='"favoriteTpye" + (index+1)' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24")      
          path(d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z")
      .cardList
        heroCard(:data='hero' :showSkill='true'  v-for='hero in heros' )
</template>
<script>
export default {
  data() {
    return {
      hero: {},
      herosList: [],
    };
  },
  computed: {
    favoriteHero() {
      return this.$store.getters.getFavoriteHero;
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
</style>
