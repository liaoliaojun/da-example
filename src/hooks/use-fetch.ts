import {ref, watch, UnwrapRef} from 'vue'
import {useEventHook} from './util/useEventHook'

/**
 * 异步请求
 * @param func promise函数
 * @param reusltDefault 如果捕获到错误，则返回该默认值
 * @param options immediate: 是否立即触发，配合enabled一起使用 默认true
 * @returns loading result enabled onResult onError
 */
export default function useFetch <TResult = any> (
  func: () => Promise<TResult>,
  options: {immediate?: boolean, reusltDefault?: TResult | null} = {immediate: true, reusltDefault: null},
) {
  const loading = ref(false)
  const result = ref<TResult | null>(options.reusltDefault ?? null)
  const enabled = ref(options.immediate ?? true)
  const resultEvent = useEventHook()
  const errorEvent = useEventHook()

  const fetch = () => {
    loading.value = true
    return func().then((res) => {
      result.value = res as UnwrapRef<TResult>
      resultEvent.trigger(res)
    }).catch((error) => {
      errorEvent.trigger(new Error(`use-fetch error: ${error}`))
    }).finally(() => {
      loading.value = false
    })
  }

  watch(enabled, (val) => {
    if (val) {
      fetch()
    }
  }, {immediate: true})

  return {
    loading,
    result,
    enabled,
    onResult: resultEvent.on,
    onError: errorEvent.on,
  }
}
