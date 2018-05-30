<template>
  <section class="container">
    <div @mouseenter="handleHover">
      <legend></legend>
      <subway :lines="lines" :stations="stations" :texts="texts"></subway>
    </div>
  </section>
</template>

<script>
import data from '~/common/data/ningbo-subway.json'
import Subway from '~/components/Subway/Subway'
import Legend from '~/components/Legend/Legend'

export default {
  data() {
    return {
      lines: data.lines,
      stations: data.stations,
      texts: data.texts
    }
  },

  components: {
    Subway, Legend
  },
  methods: {
    handleHover(e) {
      console.log(e)
    }
  }
}
</script>
