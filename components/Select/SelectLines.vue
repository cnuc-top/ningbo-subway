<style lang='stylus'>
.select-lines {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  margin-bottom: 8px;

  .select-lines-item + .select-lines-item {
  }

  &-item {
    display: flex;
    width: 85px;
    height: 40px;
    text-align: center;
    margin: 5px;
    cursor: pointer;
    opacity: 0.5;
    transition: 0.5s;
    border: 1px solid rgba(0, 0, 0, 0);
    align-items: center;
    padding: 8px;
    font-size: 13px;
    border-radius: 4px;
    font-weight: 600;
    line-height: 1;

    &:hover {
      opacity: 0.7;
    }

    &__badge {
      width: 13px;
      height: 13px;
      border-radius: 100%;
      margin-right: 10px;
    }
  }

  .is-active {
    opacity: 1;
  }
}
</style>
<template>
  <div class="select-lines">
    <el-tooltip v-for="item in list" :key="item.id" effect="dark" :content="item.tooltip" placement="bottom">
      <div @click="handleClick(item)" class="select-lines-item" :class="{'is-active': item.show}" :style="{'border-color': item.color}">
        <div class="select-lines-item__badge" :style="{background: item.color}"></div>
        {{item.name}}
      </div>
    </el-tooltip>
  </div>
</template>

<script>
import { LINES_STATUS_DETAIL } from '~/common/const'
export default {
  components: {},

  props: {
    data: Array,
    lines: Array
  },

  data() {
    return {
      LINES_STATUS_DETAIL
    }
  },

  computed: {
    list() {
      const list = this.data
      list.forEach(item => {

        const status = this.lines.find(_ => _.id ===  item.id)['status']
        item.tooltip = LINES_STATUS_DETAIL.find(_ => _.id === status)['name']
      })
      return list
    }
  },

  mounted() {

  },

  methods: {
    handleClick(item) {
      item.show = !item.show
      this.$emit('update')
    }
  }
}
</script>
