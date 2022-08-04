import { IMenuItem, INavItem, ITreeMenuItem } from '@/interface/menu'
import flux from '@/core'
export default defineStore({
  id: 'layout',
  state: () => {
    return {
      isCollapse: false,
      menuList: [] as IMenuItem[],
      userRouters: [] as ITreeMenuItem[],
      navList: [{ title: '首页', path: '/home' }] as INavItem[]
    }
  },
  actions: {
    updateIsCollapse(val: boolean) {
      this.isCollapse = val
    },
    async getMenuList() {
      this.menuList = (await flux.api.user.getUserMenu(flux.util.storage.get('uid'))) as IMenuItem[]
    },
    // 获取用户树形结构菜单
    async setUserRouters(uid: string) {
      this.menuList = (await flux.api.user.getUserMenu(uid)) as IMenuItem[]
      console.log(this.menuList)
      this.userRouters = getTreeMenus(this.menuList)
    },
    //关闭nav导航
    closeNav(index: number) {
      console.log(index)
      this.navList.splice(index, 1)
    },
    //新增nav导航
    setNavList(path: string) {
      let menuList: any[] = []
      const navItem = {} as INavItem
      this.userRouters.forEach((item: ITreeMenuItem) => {
        menuList.push(item.children)
      })
      menuList = flux.util.flatter(menuList)
      menuList.forEach((item: ITreeMenuItem) => {
        if (item && item.path == path) {
          navItem.title = item.title
          navItem.path = item.path
        }
      })
      const isBeing = this.navList.some((item: INavItem) => item.path == navItem.path)
      if (!isBeing && navItem && navItem.path) {
        this.navList.push(navItem)
      }
    },
    //关闭当前标签和首页标签之外的所有标签
    cloneOtherNav(currentPath: string) {
      this.navList = [{ title: '首页', path: '/' }]
      this.setNavList(currentPath)
    },
    resetNavList() {
      this.navList = [{ title: '首页', path: '/' }]
    }
  }
})

interface ICache {
  [key: number]: ITreeMenuItem
}
/**
 * @description 转换树形结构菜单
 * @param menuList 菜单列表
 */
const getTreeMenus = (menuList: IMenuItem[]): ITreeMenuItem[] => {
  const treeMenuList = [] as ITreeMenuItem[]
  const cache: ICache = {}
  menuList.forEach((treeItem) => {
    treeItem.meta = {
      icon: treeItem.icon,
      title: treeItem.title
    }
    cache[treeItem.rid] = treeItem
  })

  menuList.forEach((treeItem) => {
    const parent = cache[treeItem.pid]
    if (parent) {
      if (!parent.children) {
        parent.children = [] as IMenuItem[]
      }
      parent.children.push(treeItem)
    } else {
      treeMenuList.push(treeItem)
    }
  })
  return treeMenuList
}
