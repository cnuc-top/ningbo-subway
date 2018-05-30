<style lang='stylus'>
#subway-line {
  polyline {
    stroke: #999;
    stroke-width: 5px;
    fill: none;
  }
}
</style>
<template>
  <svg class="subway-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1200">
    <g id="subway-line">
      <polyline :id="item.name" :points="item.points" v-for="(item, index) in data" :key="index"></polyline>
    </g>
  </svg>
</template>

<script>
export default {
  components: {},

  props: {
    width: {
      type: Number
    },
    height: {
      type: Number
    },
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
