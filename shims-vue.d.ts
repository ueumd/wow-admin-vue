/**
 *
 *  Ambient Declarations(通称：外部模块定义) ,主要为项目内所有的 vue 文件做模块声明，毕竟 ts 默认只识别 .d.ts、.ts、.tsx 后缀的文件；
 *  即使补充了 Vue 得模块声明，IDE 还是没法识别 .vue 结尾的文件，这就是为什么引入 vue 文件时必须添加后缀的原因，不添加编译也不会报错
 */
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
