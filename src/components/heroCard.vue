<template lang="pug">
v-card.card(@click='selectCard(data)' v-if='type==0')
  .favoriteGroup(v-if='showHeart')
    svg.favoriteTpye(xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" v-for="index in herofavoriteList" :class='"favoriteTpye"+index')
      path(d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z")
  .img
    img(:src='data.avatarUrl')
    .name
      h3 {{data.name}}
v-card.favoriteCard(@click='selectCard(data)' v-else)
  .favoriteGroup(v-if='showHeart')
    svg.favoriteTpye(xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" v-for="index in herofavoriteList" :class='"favoriteTpye"+index')
      path(d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z")
  .favoriteImg
    img(:src='data.avatarUrl')
  .skill
    .p(v-for='skill in data.skill')
      h2 {{skill.title}}
      h3 {{skill.type}}
      h4 {{skill.info}} 
</template>
<script>
export default {
  name: "heroCard",
  props: {
    data: Object,
    favoriteTpye: {
      type: Number,
      default: 0,
    },
    type: {
      type: Number,
      default: 0,
    },
    showHeart: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    favoriteHero() {
      let hero = this.$store.getters.getFavoriteHero.find((hero) => {
        return hero.name == this.data.name;
      });
      return hero;
    },
    herofavoriteList() {
      let result = this.favoriteHero.favorite;
      if (result) {
        return result;
      } else {
        return [];
      }
    },
  },
  methods: {
    selectCard(data) {
      if (this.favoriteTpye == 0) {
        this.$router.push({ name: "Hero", query: { name: data.name } });
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        this.$store.commit("addFavoriteHero", {
          index: this.favoriteTpye,
          name: data.name,
        });
      }
    },
  },
  watch: {
    favoriteHero: {
      handler: function () {},
      deep: true,
    },
  },
};
</script>
<style lang="stylus" scoped>
.card
  margin: 1rem
  display inline-block
  position relative
  box-shadow: 0.2rem 0.2rem 0.7rem rgba(0,0,0,0.5)
  .img
    width 230px
    height 450px
    img
      width 100%
      height 100%
      object-fit: cover
      object-position: 50% 40px;
      transform scale(1.3)
  .name
    position: absolute
    z-index 9
    width 100%
    opacity 0
    bottom 0
    transition: 0.5s
    color: white
    text-align: center
    height 0
  &:hover
    box-shadow: 0.3rem 0.3rem 0.7rem black
    .name
      bottom 0
      height 10%
      background: rgba(0.0.0.0.5)
      opacity 1


.favoriteCard
  margin: 1rem
  display block
  position relative
  box-shadow: 0.2rem 0.2rem 0.7rem rgba(0,0,0,0.5)
  .favoriteImg
    width 200px
    height 440px
    float left
    margin-right: 4rem
    margin-bottom: 7rem
    img
      width 100%
      height 100%
      object-fit: cover
      object-position: 50% 60px;
      transform scale(1.5)



@media (max-width:700px) {
  .img{
    width 120px
    height 120px
    &:hover{
      .name{
        height 30%
      }
    }
  }
  .card>.img>img{
    object-position: 50% 25px;
    transform scale(2.3)
  }

  .favoriteCard>.favoriteImg{
    width 100% !important
    height 20%
    margin-bottom: 1rem
  }
  .favoriteCard>.favoriteImg>img{
    object-position: 50% 50%;
    transform scale(1)
  }

}

.favoriteGroup
  position: absolute
  margin: 0.5rem
  z-index 1

.favoriteTpye
  margin: 0.1rem
</style>
