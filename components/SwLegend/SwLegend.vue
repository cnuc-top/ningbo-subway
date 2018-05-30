<style lang='stylus'>
@require '../../styles/cnuc/var/color.styl';

.legend {
  border-bottom: 1px solid $color-primary;
  padding: 16px;
}
</style>
<template>
  <div class="legend">
    <slot></slot>
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

  mounted() { },

  methods: {}
}
</script>
