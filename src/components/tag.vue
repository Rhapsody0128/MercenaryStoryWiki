<template lang="pug">
.tags
  .tag.tooltip(v-for='data in datas')
    v-btn(rounded="pill" :class="data.title" @click='select(data)'  v-bind:class="{ active: data.active }" ).btn
      span {{data.title}}
      svg(v-if='data.intro.length>0' style="width:20px;height:20px" viewBox="0 0 24 20")
        path(fill="gray" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z")
    v-sheet.p.mt.rounded-lg.tooltiptext(v-if='data.intro.length>0') {{data.intro}}
</template>
<script>
export default {
  name: "tag",
  props: {
    datas: Array,
    canSelect: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    select(data) {
      if (this.canSelect) {
        if (data.active) {
          data.active = false;
        } else {
          data.active = true;
        }
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.tag
  padding: 0.1rem
  display inline-block
  position relative
  min-width 50px

/* Tooltip text */
.tooltip .tooltiptext
  opacity 0
  transform: translate(-10%)
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  width 100%
  word-wrap:break-word;
  top: 100%
  transition: 0.5s
  transform:translate(-50%,-20%) scale(0.5)
  position: absolute;
  z-index: 5;
  padding: 1rem

.tooltiptext
  pointer-events: none
  white-space: pre-wrap
  z-index 10
  position relative
  height: 0

.tag:hover
  .tooltiptext
    opacity 0.9
    width 130%
    transform: translate(-10%) scale(1)
    height auto

.active
  box-shadow: 0rem 0rem 0.1rem black
  background: black !important
  color white

.btn
  transition: 0.5s
  background: rgba(255,255,255,0.8)
.洛伊安
  background: rgba(220,100,0,0.2)
.帝國
  background: rgba(255,0,0,0.2)
.札坎
  background: rgba(150,155,155,0.2)
.獸人
  background: rgba(0,255,0,0.2)
.野獸
  background: rgba(255,255,255,0.2)
.亞馬遜
  background: rgba(255,255,0,0.2)
.精靈
  background: rgba(0,0,255,0.2)
.劍兵
  background: rgba(255,0,0,0.6)
.槍兵
  background: rgba(100,100,255,0.6)
.騎兵
  background: rgba(255,255,0,0.6)
.弓兵
  background: rgba(0,255,0,0.6)
.法師
  background: rgba(0,255,255,0.6)
.補師
  background: rgba(255,255,255,0.6)

@media (max-width:700px) {
  .tags{
    overflow hidden
    white-space: nowrap
    overflow-x: auto
    padding-bottom 1rem
  }
  .tag:hover{
    .tooltiptext{
      opacity 0.9
      width 50%
      transform: translate(-75%,10%) scale(1)
      position: relative
      height auto
    }
  }
  .tag{
    display: inline-block
  }
}
</style>
