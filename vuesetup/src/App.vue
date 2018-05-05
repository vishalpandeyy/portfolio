<template>
  <div id="app">
    <figure class="image is-128x128">
      <img id="profileImg" src="./assets/vishal.jpg">
    </figure>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

</style>
