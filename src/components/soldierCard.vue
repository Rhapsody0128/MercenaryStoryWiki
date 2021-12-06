<template lang="pug">
.outerCard
  v-card.card(@click='selectCard(data)')
    .favoriteGroup(v-if='showHeart')
      svg.favoriteTpye(xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" v-for="index in armyfavoriteList" :class='"favoriteTpye"+index')
        path(d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z")
    .img
      img(:src='data.avatarUrl')
      .name
        h3 {{data.name}}
    div(v-for="index in armyfavoriteList")
      .inputBox(@click.nantive='checkInput($event)' v-if='index == favoriteTpye')
        svg.favoriteTpye(xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" :class='"favoriteTpye"+index')
          path(d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z")
        v-text-field.input(v-model="count" :rules='rules' counter maxlength='2' label='數量' suffix="位" hint="" size='2' @change='saveCount()')
  .skill.tooltiptext(v-bind:class='{show:show}' @click='closeSkill()')
    h1 {{data.name}} 技能
    .p(v-for='skill in data.skill')
      h2.mt {{skill.title}}
      h3.mt {{skill.type}}
      h4.mt {{skill.info}} 
</template>
<script>
export default {
  name: "soldierCard",
  data() {
    return {
      count: "0",
      show: false,
      rules: [(v) => v <= 2],
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
    favoriteArmy() {
      let army = this.$store.getters.getFavoriteArmy.find((army) => {
        return army.name == this.data.name;
      });
      return army;
    },
    armyfavoriteList() {
      try {
        let result = this.favoriteArmy.favorite;
        if (result) {
          return result;
        } else {
          return [];
        }
      } catch (error) {
        return [];
      }
    },
    armyCount() {
      try {
        let result = this.favoriteArmy.count.find((data) => {
          return data.index == this.favoriteTpye;
        });
        if (result) {
          return result.count;
        } else {
          return 0;
        }
      } catch (error) {
        return 0;
      }
    },
  },
  methods: {
    selectCard(data) {
      if (this.showSkill) {
        this.show = true;
      } else {
        if (this.favoriteTpye == 0) {
          this.$router.push({ name: "Soldier", query: { name: data.name } });
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          this.$store.commit("addFavoriteArmy", {
            index: this.favoriteTpye,
            name: data.name,
          });
          this.$store.commit("addFavoriteArmyCount", {
            index: this.favoriteTpye,
            name: this.data.name,
            count: parseInt(this.count),
          });
        }
      }
    },
    checkInput(e) {
      e.stopPropagation();
    },
    closeSkill() {
      this.show = false;
    },
    saveCount() {
      this.$store.commit("addFavoriteArmyCount", {
        index: this.favoriteTpye,
        name: this.data.name,
        count: parseInt(this.count),
      });
    },
  },
  watch: {
    favoriteHero: {
      handler: function () {},
      deep: true,
    },
    armyCount() {
      this.count = this.armyCount.toString();
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
  height 230px
  .img
    width 100%
    height 100%
    img
      width 100%
      height 100%
      object-fit: cover
      transform: scale(6)
      object-position: -27% 52px;
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
      height 20%
      background: rgba(0.0.0.0.5)
      opacity 1
  .inputBox
    position: absolute
    // display: flex
    z-index 5
    width 90%
    transition: 0.5s
    height 50%
    background: rgba(255,255,255,0.8)
    text-align: center
    top 0
    bottom 0
    left 0
    right 0
    margin: auto
    .input
      width: 90%
      margin: auto



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
  height 100%
  overflow scroll

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
    transform: scale(6)
    object-position: -27% 27.4px;
  }

}

.favoriteGroup
  position: absolute
  margin: 0.5rem
  z-index 1

.favoriteTpye
  margin: 0.1rem
</style>
