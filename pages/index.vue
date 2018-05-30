<template>
  <section class="container">
    <div>
      <legend>
        <select-lines :data="lines"></select-lines>
      </legend>
      <subway :lines="lines" :stations="stations" :texts="texts"></subway>
    </div>
  </section>
</template>

<script>
import data from '~/common/data/ningbo-subway.json'
import Subway from '~/components/Subway/Subway'
import Legend from '~/components/Legend/Legend'
import SelectLines from '~/components/Select/SelectLines'

export default {
  components: {
    Subway, Legend, SelectLines
  },
  data() {
    return {
      lines: [],
      stations: data.stations,
      texts: data.texts
    }
  },

  mounted() {
    let lines =  data.lines
    lines.forEach(item => {
      item.show = true
    })

    this.lines = lines
  },

  methods: {
    handleHover(e) {
      console.log(e)
    }
  }
}
</script>
