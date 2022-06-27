import { Middleware } from '@nuxt/types'

const guest: Middleware = ({ store, redirect }) => {
  if (store.state.auth.token) {
    redirect('/')
  }
}

export default guest
