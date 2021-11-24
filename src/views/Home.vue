<template lang="pug">
#home
  .row
    v-sheet.p.mt.rounded-lg(elevation="3" color='rgba(0,0,0,0)')
      h3 種族
      .tags
        tag(:datas='race')
  .row
    v-sheet.p.mt.rounded-lg(elevation="3" color='rgba(0,0,0,0)')
      h3 兵種
      .tags
        tag(:datas='armyType')
  .row
    v-sheet.p.mt.rounded-lg(elevation="3" color='rgba(0,0,0,0)')
      h3 其他標籤
      .tags
        tag(:datas='tag')
  .row.p.mt
    v-btn(@click='clearSelectTag()') 清空所有標籤 (快捷鍵可按esc)
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
    };
  },
  computed: {
    selectTags() {
      let selectRace = this.race.filter((data) => {
        return data.active;
      });
      let selectArmyType = this.armyType.filter((data) => {
        return data.active;
      });
      let selectTag = this.tag.filter((data) => {
        return data.active;
      });
      let result = selectRace.concat(selectArmyType);
      result = result.concat(selectTag);
      return result;
    },
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
      this.tag.forEach((data) => {
        data.active = false;
      });
      this.race.forEach((data) => {
        data.active = false;
      });
      this.armyType.forEach((data) => {
        data.active = false;
      });
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
        console.log(this.selectTags);
        this.getData();
      },
      deep: true,
    },
  },
};
</script>
<style lang="stylus" scoped>

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
