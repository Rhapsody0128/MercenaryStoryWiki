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
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.card
  margin: 1rem
  width 230px
  height 450px
  display inline-block
  position relative
  box-shadow: 0.2rem 0.2rem 0.7rem rgba(0,0,0,0.5)
  .img
    width 100%
    height 100%
    img
      width 100%
      height 100%
      object-fit: cover
      object-position: 50% 40px;
      transform scale(1.3)
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
      height 10%
      background: rgba(0.0.0.0.5)
      opacity 1

@media (max-width:700px) {
  .card{
    width 120px
    height 120px
  }
  .card>.img>img{
    object-position: 50% 30px;
    transform scale(3)
  }
}
</style>
