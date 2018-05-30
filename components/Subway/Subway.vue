<style lang='stylus'>
.subway {
  position: relative;

  >svg {
    position: absolute;
  }

  .subway-station {
    z-index: 20;
  }

  .subway-line {
    z-index: 10;
  }

  .subway-label {
    z-index: 30;
  }

  .subway-bg {
    z-index: -1;
  }
}
</style>
<template>
  <div class="subway">
    <subway-line :data="lines"></subway-line>
    <subway-station :data="stations"></subway-station>
    <subway-label :data="texts"></subway-label>
    <subway-bg></subway-bg>
  </div>
</template>

<script>
import data from '~/common/data/ningbo-subway.json'
import SubwayBg from './SubwayBg'
import SubwayLine from './SubwayLine'
import SubwayStation from './SubwayStation'
import SubwayLabel from './SubwayLabel'
export default {
  components: {
    SubwayBg, SubwayLine, SubwayStation, SubwayLabel
  },

  props: {
  },

  data() {
    return {
      width: data.width,
      height: data.height,
      lines: data.lines,
      stations: data.stations,
      texts: data.texts
    }
  },

  computed: {},

  mounted() {
    console.log(data)
  },

  methods: {}
}
</script>
