interface IUserInfo {
  id: number
  account: string
  head_pic: string
}

export default defineStore({
  id: 'user',
  state: () => {
    return {
      collapse: false,
      name: '张三',
      userinfo: null as ({ token: string } & IUserInfo) | null,
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
