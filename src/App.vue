<template lang="pug">
#app
  v-app
    v-app-bar(density="compact")
      v-app-bar-title.nav
        v-btn 
          router-link(to='/') HOME
        v-btn
          router-link(to='/favorite') FAVORITE
        v-btn
          router-link(to='/') EQUIP
        v-btn
          router-link(to='/') ACTIVITY
        v-btn
          router-link(to='/') OTHERS
        v-btn
          a(href='https://forum.gamer.com.tw/B.php?bsn=72995') GAMER
        v-btn
          a(href='https://forum.gamer.com.tw/C.php?bsn=72995&snA=44&tnum=3') DATA
        v-btn
          a(href='https://github.com/Rhapsody0128/MercenaryStoryWiki') GITHUB
    v-main
      router-view
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="stylus">
*,html
  font-weight bold
  font-family: 'Noto Sans TC', sans-serif;


.nav
  background: #f6f3ff
  transition: 0.5s
  display: flex
  overflow: scroll
  &:hover
    opacity 1
#app
  min-height: 100vh
  background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);


span
  font-size 1.1rem
h1
  font-size 2.5rem
h2
  font-size 2.1rem
h3
  font-size 1.5rem
h4
  font-size 1.2rem
h5
  font-size 1rem
p
  font-size 1.3rem

.mr
  margin-right: 1.2rem
.ml
  margin-left: 1.2rem
.mt
  margin-top: 1.2rem
.mb
  margin-bottom 1.2rem
.p
  padding: 0.5rem

.row
  padding 1rem


.favoriteTpye1
  fill: rgba(255,0,0,0.8)
.favoriteTpye2
  fill: rgba(0,255,0,0.8)
.favoriteTpye3
  fill: rgba(0,0,255,0.8)
.title
  font-size 2.1rem

@media (max-width:700px) {
  .row{
    padding 0.1rem
  }
  span{
    font-size 0.9rem
  }
  h1{
    font-size 2.0rem
  }
  h2{
    font-size 1.5rem
  }
  h3{
    font-size 1.2rem
  }
  h4{
    font-size 1rem
  }
  h5{
    font-size 0.8rem
  }
  p{
    font-size 0.9rem
  }
  .mr{
    margin-right: 0.1rem
  }
  .ml{
    margin-left: 0.1rem
  }
  .mt{
    margin-top: 0.1rem
  }
  .mb{
    margin-bottom 0.1rem
  }
  .p{
    padding: 0.3rem
  }

}
</style>
