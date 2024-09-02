// export default <T>(url: Ref<string>) => {
//   // 现在这个useFetch不会根据url的变化重新加载数据
//   // 组合式函数就是用组合式api编写的函数
//   const data = ref<T | null>(null)
//   const loading = ref(false)
//   const error = ref<Error | null>(null)

//   watchEffect(() => {
//     loading.value = true
//     fetch(import.meta.env.VITE_BASE_API + url.value)
//       .then((res) => res.json())
//       .then((json) => (data.value = json))
//       .catch((err) => (error.value = err))
//       .finally(() => (loading.value = false))
//   })

//   return { data, loading, error }
// }

export default createFetch({
  baseUrl: import.meta.env.VITE_BASE_API,
  options: {
    refetch: true,
  },
})
