<template lang="pug">
#app
  v-app
    v-app-bar(density="compact").nav
      v-app-bar-title
        router-link(to='/') 首頁
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
  font-family: '微軟正黑體'

.nav
  background: #f6f3ff
  transition: 0.5s
  &:hover
    opacity 1
#app
  min-height: 100vh
  background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);

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
</style>
