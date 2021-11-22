<template lang="pug">
.tag.tooltip
  v-btn(rounded="pill")
    span {{data.title}}
    svg(v-if='data.intro.length>0' style="width:12px;height:12px" viewBox="0 0 24 20")
      path(fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z")
  v-sheet.p.mt.rounded-lg.tooltiptext(v-if='data.intro.length>0') {{data.intro}}
</template>
<script>
export default {
  name: "tag",
  props: {
    data: Object,
  },
};
</script>
<style lang="stylus" scoped>
.tag
  padding: 0.1rem
  display inline-block
  position relative

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


  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 5;
  padding: 0.5rem

/* Show the tooltip text when you mouse over the tooltip container */
.tag:hover .tooltiptext
  opacity 0.7
  width 130%
  transform: translate(-10%) scale(1)
</style>
