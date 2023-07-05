import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 5000, // 请求超时时间
})

// ----------------> satrt
const pendingRequest = new Map()
function generateReqKey(config) {
  const { method, url } = config
  return [method, url].join('&')
}

function addPendingRequest(config) {
  const requestKey = generateReqKey(config)
  if (requestKey != 'get&/sys/quotaInfo/rootList') return
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel)
      }
    })
}

//检查是否存在重复请求，若存在则取消已发的请求
function removePendingRequest(config) {
  const requestKey = generateReqKey(config)
  if (pendingRequest.has(requestKey)) {
    const cancelToken = pendingRequest.get(requestKey)
    cancelToken(requestKey)
    pendingRequest.delete(requestKey)
  }
}

// ----------------> end

service.interceptors.request.use((config) => {
//   removePendingRequest(config)
//   addPendingRequest(config)
  const token = localStorage.getItem('Access-Token')
  // config.headers['max-age'] = 31536000
  if (token) {
    config.headers['X-Access-Token'] = token
  }
  return config
})

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  () => {}
)

export { service }
