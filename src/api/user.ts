import { post } from '@/service/http'
import { IUserLoginReq, IUserLoginRes } from '@/api/types/user'
import { IMenuItem } from '@/api/types/menu'

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
 * @description 获取用户菜单
 * @param uid
 */
export async function getUserMenu(uid: string) {
  // return post<IMenuItem[]>({
  //   url: '/getUserMenu',
  //   data: { uid }
  // })
  return <IMenuItem[]>[
    {
      _id: '6281cf1b1424d9aa31b7a234',
      rid: 3,
      pid: 0,
      path: '/book',
      name: 'Book',
      icon: 'goods',
      title: '书籍管理'
    },
    {
      _id: '6281cf1b1424d9aa31b7aqq1',
      rid: 4,
      pid: 3,
      path: '/book/list',
      name: 'BookList',
      icon: 'AddLocation',
      title: '书籍列表'
    },
    {
      _id: '6281cf1b1424d9aa31b7a51e',
      rid: 5,
      pid: 3,
      path: '/book/test',
      name: 'BookTest',
      icon: 'List',
      title: '测试'
    }
  ]
}
