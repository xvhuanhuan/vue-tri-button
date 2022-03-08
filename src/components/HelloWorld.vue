<template>
  <div class="hello">
    <custom-button
      plain
      @click.native="handleClick(tag, 1)">
      收料
    </custom-button>
    <custom-button
      plain
      @click.native="handleClick(tag, 1)">
      调入
    </custom-button>
    <tri></tri>
  </div>
</template>

<script>
import tri from './tri.vue'
export default {
  name: 'HelloWorld',
  components:{
    tri
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
