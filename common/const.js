const LINES_STATUS = {
  PLANNING: 1,
  EXAMINATION: 2,
  CONSTRUCTION: 3,
  TUNNELING: 4,
  PAVEMENT: 5,
  TEST: 6,
  OPERATION: 7
}

const LINES_STATUS_DETAIL = [
  {
    id: LINES_STATUS.PLANNING,
    name: '规划'
  },
  {
    id: LINES_STATUS.EXAMINATION,
    name: '审批'
  },
  {
    id: LINES_STATUS.CONSTRUCTION,
    name: '在建'
  },
  {
    id: LINES_STATUS.TUNNELING,
    name: '盾构贯通'
  },
  {
    id: LINES_STATUS.PAVEMENT,
    name: '铺轨施工'
  },
  {
    id: LINES_STATUS.TEST,
    name: '空载试运行'
  },
  {
    id: LINES_STATUS.OPERATION,
    name: '开通运营'
  }
]

module.exports = {
  LINES_STATUS,
  LINES_STATUS_DETAIL
}
