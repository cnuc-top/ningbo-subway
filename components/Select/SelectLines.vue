<style lang='stylus'>
.select-lines {
  width: 100%;
  display: flex;

  &-item {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-weight: 600;
    color: #FFF;
    cursor: pointer;
    opacity: 0.5;
    transition: 0.5s;
  }

  .is-active {
    opacity: 1;
  }
}
</style>
<template>
  <div class="select-lines">
    <div @click="handleClick(item)" class="select-lines-item" :class="{'is-active': item.show}" :style="{background: item.color}" v-for="item in data" :key="item.id">
      {{item.name}}
    </div>
  </div>
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

  mounted() {

  },

  methods: {
    handleClick(item) {
      console.log(item)
      item.show = !item.show
    }
  }
}
</script>
