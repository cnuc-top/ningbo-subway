<style lang='stylus'>
  .subway-line{
    font-size:11px;
  }
</style>
<template>
  <svg class="subway-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1200">
    <g id="subway-text">
      <text :id="item.name" :x="item.x" :y="item.y" :points="item.points" v-for="(item, index) in data" :key="index">{{item.title}}</text>
    </g>
  </svg>
</template>

<script>
export default {
  components: {},

  props:{
    data: Array
  },

  data() {
    return {
    }
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>
