<template lang="pug">
v-card.card(@click='selectCard(data)')
  div.img
    img(:src='data.avatarUrl')
    .name
      h3 {{data.name}}
</template>
<script>
export default {
  name: "heroCard",
  props: {
    data: Object,
  },
  methods: {
    selectCard(data) {
      this.$router.push({ name: "Hero", query: { name: data.name } });
    },
  },
};
</script>
<style lang="stylus" scoped>
.card
  margin: 1rem
  border-radius 50%
  width 150px
  height 150px
  display inline-block
  position relative
  .img
    width 100%
    height 95%
    img
      width 100%
      height 100%
      object-fit: cover
      object-position: 50% 38px;
      transform scale(3)
  .name
    position: absolute
    z-index 9
    width 100%
    opacity 0
    bottom 0
    transition: 0.5s
    color: white
    text-align: center
  &:hover
    .name
      bottom 5%
      background: rgba(0.0.0.0.5)
      opacity 1
</style>
