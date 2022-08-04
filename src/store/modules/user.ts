import { IUserLoginRes } from '@/interface/user'

const userinfo: IUserLoginRes = {
  token: '',
  uid: '',
  username: ''
}

export default defineStore({
  id: 'user',
  state: () => {
    return {
      userinfo
    }
  },
  actions: {
    setUserinfo(user: IUserLoginRes) {
      this.userinfo = user
    },
    resetUserinfo() {
      this.userinfo = {
        token: '',
        uid: '',
        username: ''
      }
    }
  }
})
