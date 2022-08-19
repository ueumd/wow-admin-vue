import { request } from '@/config'

import { IUserLoginReq, IUserLoginRes } from '@/interface/user'
import { IMenuItem } from '@/interface/menu'

import flux from '@/core'

/**
 * Login
 * @param data
 */
export const login = ({ username, password }: IUserLoginReq) => {
  return request.post<IUserLoginRes>('/web/api/login', { username, password }, { load: true })
}

/**
 * logout
 */
export const logout = () => {
  return request.get('/web/api/logout').then(() => {
    flux.store.layout.resetNavList()
    flux.store.user.resetUserinfo()
    flux.util.storage.remove('token')
    flux.util.storage.remove('uid')
    return
  })
}

// api test
export const apiTest = () => {
  return request.get('/web/api/test')
}

/**
 * @description 获取用户菜单
 * @param uid
 */
export async function getUserMenu(uid: string) {
  return request.post<IMenuItem>('/web/api/user/getUserMenu', uid)
}

export const resource = () => {
  return request.get('/web/api/user/resource')
}
