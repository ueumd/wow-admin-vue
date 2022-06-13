export default defineStore({
  id: 'test',
  state: () => {
    return {
      name: '张三',
      token: 'token...'
    }
  },
  getters: {
    fullName: (state) => {
      return state.name + '丰'
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    }
  }
})
