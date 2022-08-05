import type { MockMethod } from 'vite-plugin-mock'

const menus = [
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

export default [
  {
    url: '/web/api/login',
    method: 'post',
    response: ({ body }) => {
      console.log(body)
      return {
        code: 0,
        msg: 'success',
        data: {
          token: 'eyJhbGciInR5cCI6IkpXVCJ9.eyJpZzA1OGE3ZTkzYzgyYyIsImlhdCI6MTY1OTYwMTU1OX0.NemTFPTtHDO23e39NYUPk8',
          uid: '6281d355ebd7058a7e93c82c',
          username: 'admin'
        }
      }
    }
  },
  {
    url: '/web/api/logout',
    method: 'get',
    response: ({ body }) => {
      return {
        code: 0,
        msg: 'success',
        data: {}
      }
    }
  },
  {
    url: '/web/api/test',
    method: 'get',
    response: ({ body }) => {
      return {
        code: 0,
        msg: 'success',
        data: {
          userId: '1',
          username: 'admin',
          desc: 'manager',
          token: 'fakeToken1'
        }
      }
    }
  },
  {
    url: '/web/api/user/getUserMenu',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 0,
        msg: 'success',
        data: menus
      }
    }
  },
  {
    url: '/web/api/user/resource',
    method: 'get',
    response: ({ body }) => {
      return {
        code: 0,
        msg: 'success',
        data: [
          {
            title: 'Vite 中文',
            desc: '下一代前端开发与构建工具',
            url: 'https://cn.vitejs.dev/'
          },
          {
            title: 'PnPm',
            desc: '快速的，节省磁盘空间的包管理工具',
            url: 'https://pnpm.io/zh/'
          },
          {
            title: 'unocss',
            desc: '受Windi CSS、Tailwind CSS 和 Twind 的启发',
            url: 'https://github.com/unocss/unocss'
          },
          {
            title: 'Vue API',
            desc: '官方文档',
            url: 'https://vuejs.org/api/'
          },
          {
            title: 'Vue Router',
            desc: 'Vue Router',
            url: 'https://router.vuejs.org/zh/index.html'
          },
          {
            title: 'Vuex',
            desc: 'vuex',
            url: 'https://vuex.vuejs.org/zh/index.html'
          },
          {
            title: 'Pinina',
            desc: 'Pinina',
            url: 'https://pinia.vuejs.org/'
          },
          {
            title: 'ElementPlus',
            desc: '一套基于 Vue 3.0 的桌面端组件库',
            url: 'https://element-plus.gitee.io/#/zh-CN/component/installation'
          },
          {
            title: 'Nutui',
            desc: '京东风格的轻量级移动端 Vue 组件库',
            url: 'https://nutui.jd.com/#/range'
          },
          {
            title: 'Vant',
            desc: '轻量、可靠的移动端 Vue 组件库',
            url: 'https://vant-contrib.gitee.io/vant/v3/#/zh-CN'
          },
          {
            title: 'Ant Design',
            desc: '为 Web 应用提供了丰富的基础 UI 组件',
            url: 'https://antdv.com/docs/vue/introduce-cn/'
          },
          {
            title: ' vxe-table',
            desc: '比Element Plus 性强的表格',
            url: 'https://vxetable.cn/#/table/start/install'
          },
          {
            title: 'Iconpark',
            desc: '2400+基础图标，29种图标分类，提供更多的选择',
            url: 'https://iconpark.oceanengine.com/home'
          },
          {
            title: 'Naiveui',
            desc: '一个 Vue 3 组件库，使用 TypeScript',
            url: 'https://www.naiveui.com/zh-CN/light'
          },
          {
            title: 'Echarts5.0',
            desc: '一个基于 JavaScript 的开源可视化图表库',
            url: 'https://echarts.apache.org/zh/index.html'
          },
          {
            title: 'VueUse',
            desc: 'VUE组合实用程序的集合',
            url: 'https://vueuse.org/'
          },
          {
            title: 'draggable',
            desc: '拖拽库',
            url: 'https://github.com/SortableJS/vue.draggable.next'
          },
          {
            title: 'vue-draggable-next',
            desc: '拖拽库 ts实现',
            url: 'https://github.com/anish2690/vue-draggable-next'
          },
          {
            title: 'VueUse',
            desc: 'VUE组合实用程序的集合',
            url: 'https://vueuse.org/'
          },
          {
            title: 'Vue3-resource',
            desc: '收集vue3资源',
            url: 'https://github.com/hu-snail/vue3-resource'
          }
        ]
      }
    }
  }
] as MockMethod[]
