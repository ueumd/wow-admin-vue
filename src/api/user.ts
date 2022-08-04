import { post, get } from '@/service/http'
import { IUserLoginReq, IUserLoginRes } from '@/interface/user'
import { IMenuItem } from '@/interface/menu'

import flux from '@/core'

/**
 * Login
 * @param data
 */
export const login = (data: IUserLoginReq) => {
  return post<IUserLoginRes>({
    url: '/web/api/login',
    data
  })
}

/**
 * logout
 */
export const logout = () => {
  return get({
    url: '/web/api/logout'
  }).then(() => {
    flux.store.layout.resetNavList()
    flux.store.user.resetUserinfo()
    flux.util.storage.remove('token')
    flux.util.storage.remove('uid')
    return
  })
}

// api test
export const apiTest = () => {
  return get({
    url: '/web/api/test'
  })
}

/**
 * @description 获取用户菜单
 * @param uid
 */
export async function getUserMenu(uid: string) {
  return post<IMenuItem[]>({
    url: '/web/api/user/getUserMenu',
    data: { uid }
  })
}
