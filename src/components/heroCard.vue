<template lang="pug">
.outerCard
  v-card.card(@click='selectCard(data)')
    .favoriteGroup(v-if='showHeart')
      svg.favoriteTpye(xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" v-for="index in herofavoriteList" :class='"favoriteTpye"+index')
        path(d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z")
    .img
      img(:src='data.avatarUrl')
      .name
        h3 {{data.name}}
  .skill.tooltiptext( v-bind:class='{show:show}' @click='colseSkill()')
    h1 {{data.name}} 的技能
    .p(v-for='skill in data.skill')
      h2.mt {{skill.title}}
      h3.mt {{skill.type}}
      h4.mt {{skill.info}} 
</template>
<script>
export default {
  name: "heroCard",
  data() {
    return {
      show: false,
    };
  },
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
    showSkill: {
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
      if (this.showSkill) {
        this.show = true;
      } else {
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
      }
    },
    colseSkill() {
      this.show = false;
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
.outerCard
  display inline-block
  position relative
.card
  margin: 1rem
  display inline-block
  position relative
  box-shadow: 0.2rem 0.2rem 0.7rem rgba(0,0,0,0.5)
  width 230px
  height 450px
  .img
    width 100%
    height 100%
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


.tooltiptext
  opacity 0
  background-color: black;
  color: #fff;
  width 100%
  word-wrap:break-word;
  bottom 0
  left: 0
  transition: 0.5s
  z-index: 10;
  padding: 1rem
  position fixed
  height 0

.show
  opacity 0.8
  height 95%

@media (max-width:700px) {
  .card{
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

}

.favoriteGroup
  position: absolute
  margin: 0.5rem
  z-index 1

.favoriteTpye
  margin: 0.1rem
</style>
