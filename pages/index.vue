<template>
  <section class="container">
    <div>
      <sw-legend>
        <select-lines @update="handleUpdate" :data="lines" :lines="linesData"></select-lines>
        <!-- <el-checkbox-group v-model="showStatus" size="small">
          <el-checkbox label="已建成" border></el-checkbox>
          <el-checkbox label="在建中" border></el-checkbox>
          <el-checkbox label="规划" border></el-checkbox>
        </el-checkbox-group> -->
      </sw-legend>
      <subway :lines="lines" :stations="stations" :texts="texts"></subway>
    </div>
  </section>
</template>

<script>
import data from '~/common/data/ningbo-subway.json'
import lines from '~/common/data/ningbo-subway-lines.json'
import Subway from '~/components/Subway/Subway'
import SwLegend from '~/components/SwLegend/SwLegend'
import SelectLines from '~/components/Select/SelectLines'

function arrInit(arr) {
  arr.forEach(item => {
    item.show = true
  })
  return arr
}

export default {
  components: {
    Subway, SwLegend, SelectLines
  },

  data() {
    return {
      linesData: lines,
      lines: [],
      stations: [],
      texts: [],
      showStatus: []
    }
  },

  mounted() {
    this.lines = arrInit(data.lines)
    this.stations = arrInit(data.stations)
    this.texts = arrInit(data.texts)
  },

  methods: {
    handleHover(e) {
      console.log(e)
    },
    handleUpdate() {
      const showLines = new Set()
      const hideStations = new Set()

      // 计算需要显示的线路
      this.lines.forEach(item => {
        if (item.show) showLines.add(item.id)
      })

      // 计算需要隐藏的站点
      lines.forEach(item => {
        const { id, stations } = item
        if (!showLines.has(id)) {
          stations.forEach(item => {
            hideStations.add(item)
          })
        }
      })

      lines.forEach(item => {
        const { id, stations } = item
        if (showLines.has(id)) {
          stations.forEach(item => {
            hideStations.delete(item)
          })
        }
      })

      this.texts.forEach(item => {
        item.show = true
        if (hideStations.has(item.title)) {
          item.show = false
        }
      })

      this.stations.forEach(item => {
        console.log(item.name)
        item.show = true
        if (hideStations.has(item.name)) {
          item.show = false
        }
      })
    }
  }
}
</script>
