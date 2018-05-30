<style lang='stylus'>
#subway-line {
  polyline {
    stroke-width: 5px;
    stroke-linecap: round;
    fill: none;
    opacity: 0;
    transition: 0.3s;

    &.is-show {
      opacity: 1;
    }
  }
}
</style>
<template>
  <svg class="subway-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1200">
    <g id="subway-line">
      <polyline :class="{'is-show': item.show}" :stroke="item.color" :id="item.id" :points="item.points" v-for="item in data" :key="item.id"></polyline>
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
