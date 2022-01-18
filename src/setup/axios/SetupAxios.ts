export default function setupAxios(axios: any, store: any) {
  axios.defaults.headers.Accept = 'application/json'
  axios.interceptors.request.use(
    (config: any) => {
      const {
        auth: {api_token},
      } = store.getState()

      if (api_token) {
        config.headers.Authorization = `Bearer ${api_token}`
      }

      return config
    },
    (err: any) => Promise.reject(err)
  )
}
