import {ref} from 'vue'

interface Breadcrumb {
  path?: string,
  label: string,
}

const breadcrumbList = ref<Breadcrumb[]>([])

export default function useBreadcrumb () {
  const setBreadcrumbList = (data: Breadcrumb[]) => {
    breadcrumbList.value = data
  }

  const clearBreadcrumbList = () => {
    breadcrumbList.value = []
  }

  return {
    breadcrumbList,
    setBreadcrumbList,
    clearBreadcrumbList,
  }
}
