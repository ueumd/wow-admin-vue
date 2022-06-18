export default defineStore({
  id: 'layout',
  state: () => {
    return {
      isCollapse: false,
      navList: []
    }
  },
  actions: {
    updateIsCollapse(val: boolean) {
      this.isCollapse = val
    }
  }
})
