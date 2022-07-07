interface IUserInfo {
  id: number
  username: string
}

export default defineStore({
  id: 'user',
  state: () => {
    return {
      userinfo: {
        username: 'test'
      },
      token: 'token...'
    }
  },
  actions: {
    setUser(payload: any) {
      this.userinfo = payload
    }
  }
})
