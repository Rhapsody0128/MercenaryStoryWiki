<template lang="pug">
.soldier
  v-container(fluid)
    v-row
      v-col(cols='12' md='8')
        v-sheet.p.rounded-lg(elevation="3" color='rgba(0,0,0,0)').img
          img(:src='hero.avatarUrl')
          .skill(v-for='skill in hero.skill' :class="skill.class" )
            .tooltip
              .tooltiptext 
                h2 {{skill.title}}
                span {{skill.info}}
      v-col(cols='12' md='4')
        v-row.flex-row
          v-col.p(col='3' md='12' v-for='skill in hero.skill')
            v-sheet.p.rounded-lg(elevation="3" color='rgba(0,0,0,0)')
              h2 {{skill.title}}
              h3 {{skill.type}}
              h4 {{skill.info}}
    v-row
      v-col
        v-sheet.p.mt.rounded-lg(elevation="3" color='rgba(0,0,0,0)')
          h1 {{hero.name}}
          span(v-for='(data,index) in hero.nickName')
            span(v-if='index>0') 、
            span {{data}}
          h5 {{hero.info}}
          .tags.mt
            tag(:datas='tag' :canSelect="false")
    v-row(v-for='tagData in tagData')
      v-col
        v-sheet.p.mt.rounded-lg(elevation="6" color='rgba(0,0,0,0)')
          h2 {{tagData.tag}}
          soldierCard(v-for='data in tagData.data' :data='data')
</template>
<script>
import { findData, filterData } from "../data/global";
import { armyTypeList } from "../data/army/index";
import { raceList } from "../data/race/index";
import { armyList } from "../data/army/index";
import { armyTagList } from "../data/tag/index";
export default {
  data() {
    return {
      hero: {},
      tag: [],
      tagData: [],
    };
  },
  computed: {
    heroName() {
      return this.$route.query.name;
    },
  },
  methods: {
    getData() {
      this.hero = findData(armyList, "name", this.heroName);

      this.tag = [];
      let armyTypeTag = findData(armyTypeList, "title", this.hero.armyType);
      let raceTag = findData(raceList, "title", this.hero.race);
      this.tag.push(raceTag, armyTypeTag);
      console.log(this.tag);
      this.hero.tag.map((data) => {
        let tag = findData(armyTagList, "title", data);
        if (tag) {
          this.tag.push(tag);
        }
      });

      this.getTagHero();
    },
    getTagHero() {
      this.tagData = [];
      let sameRaceHero = filterData(
        armyList,
        "race",
        this.hero.race,
        this.hero.name
      );
      let sameArmyTypeHero = filterData(
        armyList,
        "armyType",
        this.hero.armyType,
        this.hero.name
      );
      if (sameRaceHero.length > 0) {
        this.tagData.push({
          tag: "種族",
          data: sameRaceHero,
        });
      }
      if (sameArmyTypeHero.length > 0) {
        this.tagData.push({
          tag: "兵種",
          data: sameArmyTypeHero,
        });
      }

      this.tag.map((tag) => {
        let result = [];
        if (tag) {
          armyList.map((hero) => {
            if (hero.tag.includes(tag.title) && hero.name !== this.hero.name) {
              result.push(hero);
            }
          });
          if (result.length > 0) {
            this.tagData.push({
              tag: tag.title,
              data: result,
            });
          }
        }
      });
    },
  },
  mounted() {
    this.getData();
  },
  watch: {
    heroName() {
      if (this.heroName) {
        this.getData();
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.img
  width 100%
  position: relative
  img
    width 100%
    border-radius: 0.5rem
    height  100%
    object-fit: cover

.content
  padding: 1rem

.flex-row
  flex-wrap: wrap

@media (max-width:600px) {
  .flex-row{
    display: inline-block
    padding 0.5rem
  }
}
.skill
  width 5%
  height 8.5%
  position: absolute
  z-index 9

.Ex
  bottom 28.5%
  left: 21.6%
.active
  bottom 70%
  left: 52%
.passive
  bottom 14.9%
  left: 29.3%
.race
  bottom 2.6%
  left: 21.6%

.tooltip .tooltiptext
  opacity 0
  transform: translate(-10%)
  background-color: white;
  color: #000;
  text-align: center;
  padding: 1rem;
  border-radius: 1rem;
  width 300%
  word-wrap:break-word;
  right 0%
  top -50%
  transition: 0.5s
  transform:translate(-50%,-20%) scale(0.5)
  position: absolute;
  z-index: 5;
  padding: 0.5rem

.tooltiptext
  pointer-events: none

.skill:hover
  .tooltiptext
    opacity 0.9
    width 500%
    transform: translate(-30%) scale(1)
</style>
