import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import util from '@/utils/index'
import router from '@/router/'

function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: '',
    timeout: 12000
  }
  const service = axios.create({
    ...defaultOptions,
    ...options
  })
  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(repResolve, repReject)
  return service
}

const WITHOUT_TOKEN_API = [{ url: '/web/api/login', method: 'POST' }]

export function isWithoutToken({ url = '', method = '' }) {
  return WITHOUT_TOKEN_API.some((item) => item.url === url && item.method === method.toUpperCase())
}

// 请求拦截
function reqResolve(config: AxiosRequestConfig) {
  // 防止缓存，给get请求加上时间戳
  if (config.method === 'get') {
    config.params = { ...config.params, t: new Date().getTime() }
  }

  // 处理不需要token的请求
  if (isWithoutToken(config)) {
    return config
  }

  const token = util.storage.get('token')
  if (!token) {
    /**
     * * 未登录或者token过期的情况下
     * * 跳转登录页重新登录，携带当前路由及参数，登录成功会回到原来的页面
     */
    router.push({
      path: '/login'
    })
    return Promise.reject({ code: '-1', message: '未登录' })
  }

  /**
   * * jwt token
   * ! 认证方案: Bearer
   */
  config.headers!.Authorization = config.headers!.Authorization || 'Bearer ' + token

  return config
}

// 请求错误处理
function reqReject(error: Error) {
  return Promise.reject(error)
}

// 响应拦截
function repResolve(response: AxiosResponse) {
  if (response.status === 200 && response?.data.code === 0) {
    return response?.data.data
  }
  return Promise.reject('')
}

// 响应拦截错误处理
function repReject(error: any) {
  let { code, message } = error.response.data || {}
  if (util.isNullOrUnDef(code)) {
    // 未知错误
    code = -1
    message = '接口异常！'
  } else {
    /**
     * TODO 此处可以根据后端返回的错误码自定义框架层面的错误处理
     */
    switch (code) {
      case 401:
        message = message || '登录已过期'
        break
      case 403:
        message = message || '没有权限'
        break
      case 404:
        message = message || '资源或接口不存在'
        break
      default:
        message = message || '未知异常'
        break
    }
  }
  console.error(`【${code}】 ${error}`)
  return Promise.reject({ code, message, error })
}

const instance = createAxios()

const request = <T = any>(config: AxiosRequestConfig | string, options?: AxiosRequestConfig): Promise<T> => {
  if (typeof config === 'string') {
    if (!options) {
      return instance.request<T, T>({
        url: config
      })
      // throw new Error('请配置正确的请求参数');
    } else {
      return instance.request<T, T>({
        url: config,
        ...options
      })
    }
  } else {
    return instance.request<T, T>(config)
  }
}

export function get<T = any>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'GET' }, options)
}

export function post<T = any>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'POST' }, options)
}

export default <T = any>(config: AxiosRequestConfig) => {
  return instance.request(config).then((res) => {
    return (res.data.data || res.data) as T
  })
}
