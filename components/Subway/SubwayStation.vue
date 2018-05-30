<style lang='stylus'>
.subway-station {
  fill: #fff;
  stroke: #000;
}
</style>
<template>
  <svg class="subway-station" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1200">
    <g id="subway-station">
      <g v-for="(item, index) in data" :key="index">
        <circle v-if="item.type == 1" r="4.5" :id="item.name" :cx="item.x" :cy="item.y"></circle>
        <rect v-if="item.type == 2" width="16" height="9" rx="4.5" ry="4.5" :id="item.name" :x="item.x" :y="item.y"></rect>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  components: {},
  props: {
    data: Array
  },

  data() {
    return {
    }
  },

  computed: {},

  mounted() { },

  methods: {}
}
</script>
