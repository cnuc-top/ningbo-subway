<template>
  <section class="container">
    <div @mouseenter="handleHover">
      <subway ></subway>
    </div>
  </section>
</template>

<script>
import Subway from '~/components/Subway/Subway'

export default {
  components: {
    Subway
  },
  methods: {
    handleHover(e) {
      console.log(e)
    }
  }
}
</script>

<style>

</style>
