import {onError} from '@apollo/client/link/error'
import {ElMessage} from 'element-plus'
import runtimeArgs from '~/runtime-args'

// 是否在dms框架内？
const isInner = /[?&]dms_inner([=&]|$)/.test(location.href)
const isInnerMDS = /[?&]mds_inner([=&]|$)/.test(location.href)

export const handle401 = () => {
  const loginUrl = runtimeArgs.EJ_ENV_LOGIN2_URL
  const dmsWebappUrl = runtimeArgs.EJ_ENV_DMS2_WEBAPP
  const mdsWebappUrl = runtimeArgs.EJ_ENV_MDS2_WEBAPP

  // 通知dms框架跳转
  if (isInner && dmsWebappUrl && window.top) {
    window.top.postMessage(JSON.stringify({code: '401'}), dmsWebappUrl)
    return 
  }
  // 通知dms框架跳转
  if (isInnerMDS && mdsWebappUrl) {
    window.parent.postMessage(JSON.stringify({code: '401'}), mdsWebappUrl)
    return 
  }
  // cas地址
  if (runtimeArgs.EJ_ENV_USE_CAS && runtimeArgs.EJ_ENV_CAS_LOGIN_URL) {
    location.href = runtimeArgs.EJ_ENV_CAS_LOGIN_URL
    return
  }

  // 跳转到自带的url地址
  if (loginUrl) {
    // location.href = `${loginUrl}/?redirect_url=${encodeURIComponent(location.href)}`
    return
  }
  console.error('未找到登陆失败的跳转地址')
}

export const errorLink = onError(({graphQLErrors, networkError, operation, forward}: any) => {
    /*
    * 我只接受几个共有的code
    * 服务器错误  500的
    * 如果是 graphQLErrors 错误 继续执行
    * 如果是 networkError 错误 断代码
    */
  if (graphQLErrors) {
    const extensions = graphQLErrors[0].extensions
    const {message} = graphQLErrors[0]
    if (extensions) {
      // @ts-ignore
      const code = graphQLErrors[0].extensions.code

      if (code) {
        if (code === '401') {
          console.error('用户未登录')
          handle401()
        } else if (code === '500') {
          ElMessage({type: 'error', duration: 0, showClose: true, message: '后端服务不可用，请联系管理员 '})
        } else if (message) {
          ElMessage({type: 'error', duration: 0, showClose: true, message})
        }
        console.log(extensions)
      }
    } else {
      // 其他的错误 去单独的接口中处理
    }
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
    // https://www.apollographql.com/docs/react/data/error-handling/
    return forward(operation)
    // throw new Error(networkError.message)
  }
})
