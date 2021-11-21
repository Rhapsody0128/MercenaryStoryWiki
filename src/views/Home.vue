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
  .line
    .row
      div.mr(v-if='race.length>0')
        h3 種族
        .tags
          .tag(v-for='data in race')
            v-btn(rounded="pill" @click='selectTag(race,data)')
              span {{data.title}}
    .row
      div(v-if='armyType.length>0')
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
    heroCard(v-for='data in selectHeros' :data='data')
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
.line
  display flex
  flex-wrap: nowrap
.tags
  .tag
    padding: 0.1rem
    display inline-block

.mr
  margin-right: 3rem
.ml
  margin-left: 3rem
.mt
  margin-top: 3rem
.mb
  margin-bottom 3rem
.p
  padding: 0.5rem

@media (max-width:900px) {
  .line{
    display inline-block !important
  }
}
</style>
