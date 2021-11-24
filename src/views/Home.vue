<template lang="pug">
#home
  .row
    v-sheet.p.mt.rounded-lg(elevation="3" color='rgba(0,0,0,0)')
      h3 目前篩選 ( 按下esc能快清除篩選 )
      .tags
        .tag(v-if='selectTags.length==0' )
          v-btn(rounded="pill" disabled)
            span 全部
        .tag(v-else)
          v-btn( rounded="pill" @click='clearSelectTag()')
            span 清除全部
        tag(:data='data' v-for='(data,index) in selectTags' :key='data.title' @click='tagSelectBack(data,index)')
  .line
    .row
      v-sheet.p.mt.rounded-lg(elevation="3" color='rgba(0,0,0,0)')
        h3 種族
        .tags
          tag(:data='data' v-for='(data,index) in race' :key='data.title' @click='selectTag(race,data)')
    .row
      v-sheet.p.mt.rounded-lg(elevation="3" color='rgba(0,0,0,0)')
        h3 兵種
        .tags
          tag(:data='data' v-for='(data,index) in armyType' :key='data.title' @click='selectTag(armyType,data)')
  .row
    v-sheet.p.mt.rounded-lg(elevation="3" color='rgba(0,0,0,0)')
      h3 其他標籤
      .tags
        tag(:data='data' v-for='data in tag'  @click='selectTag(tag,data)')
  .row
    v-sheet.p.mt.rounded-lg(elevation="3" color='rgba(0,0,0,0)')
      heroCard(v-for='data in selectHeros' :data='data' )
</template>
<script>
import { heroList } from "../data/hero/index";
import { tagList } from "../data/tag/index";
import { armyTypeList } from "../data/army/index";
import { raceList } from "../data/race/index";
export default {
  data() {
    return {
      heros: [],
      selectHeros: [],
      armyType: [],
      race: [],
      tag: [],
      selectTags: [],
    };
  },
  methods: {
    getData() {
      if (this.selectTags.length == 0) {
        this.selectHeros = this.heros;
      } else {
        let heros = heroList;
        this.selectTags.map((data) => {
          let result = [];
          heros.map((hero) => {
            if (data.type == "tag") {
              if (hero.tag.includes(data.title)) {
                let find = result.find((unit) => {
                  return hero == unit;
                });
                if (!find) {
                  result.push(hero);
                }
              }
            } else {
              if (data.title == hero[data.type]) {
                let find = result.find((unit) => {
                  return hero == unit;
                });
                if (!find) {
                  result.push(hero);
                }
              }
            }
            heros = result;
          });
        });
        this.selectHeros = heros;
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
  },
  mounted() {
    this.heros = JSON.parse(JSON.stringify(heroList));
    this.armyType = JSON.parse(JSON.stringify(armyTypeList));
    this.race = JSON.parse(JSON.stringify(raceList));
    this.tag = JSON.parse(JSON.stringify(tagList));
    this.selectHeros = this.heros;
    let that = this;
    document.onkeydown = function (evt) {
      if (evt.key == "Escape") {
        that.clearSelectTag();
      }
    };
  },
  watch: {
    selectTags: {
      handler: function () {
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
.line
  display flex
  flex-wrap: nowrap
  .row
    width 100%


.tag
  padding: 0.1rem
  display inline-block

@media (max-width:900px) {
  .line{
    display inline-block !important
  }
}
</style>
