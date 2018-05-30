<style lang='stylus'>
.subway-label {
  font-size: 11px;
  opacity: 0;
  transition: 0.3;

  &.is-show {
    opacity: 1;
  }
}
</style>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1200">
    <g>
      <text class="subway-label" :class="{'is-show': item.show}" :id="item.name" :x="item.x" :y="item.y" :points="item.points" v-for="(item, index) in data" :key="index">{{item.title}}</text>
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
