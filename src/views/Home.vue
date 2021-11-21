<template lang="pug">
#home
  .row
    div
      h3 目前篩選
      .tags
        .tag(v-if='selectTags.length==0')
          v-btn(rounded="pill" disabled)
            span 全部
        .tag(v-else)
          v-btn(rounded="pill" @click='clearSelectTag()')
            span 清除全部
        .tag(v-for='(data,index) in selectTags')
          v-btn(rounded="pill"  @click='tagSelectBack(data,index)')
            span {{data.title}}      
  .row
    div(v-if='race.length>0')
      h3 種族
      .tags
        .tag(v-for='data in race')
          v-btn(rounded="pill" @click='selectTag(race,data)')
            span {{data.title}}
    div.ml(v-if='armyType.length>0')
      h3 兵種
      .tags
        .tag(v-for='data in armyType')
          v-btn(rounded="pill" @click='selectTag(armyType,data)')
            span {{data.title}}
  //- .row
  //-   div(v-if='tag.length>0')
  //-     h3 其他標籤
  //-     .tags
  //-       .tag(v-for='data in tags')
  //-         v-btn(rounded="pill" @click='selectTag(tags,data)')
  //-           span {{data.title}}
  .row
    .outerCard
        v-card.card(v-for='data in selectHeros' @click='selectCard(data)')
          div.img
            img(:src='data.avatarUrl')
      
</template>
<script>
import { heroList } from "../data/hero/index";
import { armyTypeList } from "../data/army/index";
import { raceList } from "../data/race/index";
export default {
  data() {
    return {
      heros: [],
      selectHeros: [],
      armyType: [],
      race: [],
      selectTags: [],
    };
  },
  methods: {
    getData() {
      if (this.selectTags.length == 0) {
        this.selectHeros = this.heros;
      } else {
        this.selectTags.map((data) => {
          this.selectHeros = this.heros.filter((item) => {
            return data.title == item[data.type];
          });
        });
      }
    },
    selectTag(from, data) {
      this.selectTags.push(data);
      let find = from.find((item) => {
        return data == item;
      });
      if (find) {
        from.splice(from.indexOf(data), 1);
      }
    },

    tagSelectBack(data, index) {
      switch (data.type) {
        case "armyType":
          this.armyType.push(data);
          break;
        case "race":
          this.race.push(data);
          break;
        case "tag":
          this.tag.push(data);
          break;
      }
      this.selectTags.splice(index, 1);
    },
    clearSelectTag() {
      this.selectTags.map((data) => {
        switch (data.type) {
          case "armyType":
            this.armyType.push(data);
            break;
          case "race":
            this.race.push(data);
            break;
          case "tag":
            this.tag.push(data);
            break;
        }
      });
      this.selectTags = [];
    },

    selectCard(data) {
      this.$router.push({ name: "Hero", query: { name: data.name } });
    },
  },
  mounted() {
    this.heros = heroList;
    this.armyType = armyTypeList;
    this.race = raceList;
    this.selectHeros = this.heros;
  },
  watch: {
    selectTags: {
      handler: function () {
        console.log("object");
        this.getData();
      },
      deep: true,
    },
  },
};
</script>
<style lang="stylus" scoped>
.row
  padding 1rem
  display: flex
.tags
  .tag
    padding: 0.5rem
    display inline-block
.img
  width 100%
  height 95%
  img
    width 100%
    height 100%
    object-fit: cover
.outerCard
  .card
    margin: 1rem
    border-radius 50%
    width 150px
    height 150px
    display inline-block

.mr
  margin-right: 5rem
.ml
  margin-left: 5rem
.mt
  margin-top: 5rem
.mb
  margin-bottom 5rem
.p
  padding: 0.5rem
</style>
