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
    v-btn(@click='clearSelectTag()') 
      span 清空所有標籤 (快捷鍵可按esc)
    v-btn.favorite(@click='changeFavoriteType()')
      span 收藏模式
      svg(v-if="favoriteType==0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24")
        path(d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z")
      svg(:class='"favoriteTpye" + favoriteType' v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24")      
        path(d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z")
    v-btn.favorite(@click='clearFavorite()')
      span 清空所有收藏
  .row
    v-sheet.p.mt.rounded-lg(elevation="3" color='rgba(0,0,0,0)')
      heroCard(v-for='data in selectHeros' :data='data' :favoriteTpye='favoriteType' :showHeart="true")
</template>
<script>
import { heroList } from "../data/hero/index";
import { heroTagList } from "../data/tag/index";
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
      favoriteType: 0,
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

    changeFavoriteType() {
      this.favoriteType++;
      if (this.favoriteType > 3) {
        this.favoriteType = 0;
      }
    },
    clearFavorite() {
      this.favoriteType = 0;
      this.$store.commit("clearFavorite");
    },
  },
  mounted() {
    this.heros = JSON.parse(JSON.stringify(heroList));
    this.armyType = JSON.parse(JSON.stringify(armyTypeList));
    this.race = JSON.parse(JSON.stringify(raceList));
    this.tag = JSON.parse(JSON.stringify(heroTagList));
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
