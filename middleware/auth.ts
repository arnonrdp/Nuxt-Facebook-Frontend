import { Middleware } from '@nuxt/types'

const auth: Middleware = ({ store, redirect }) => {
  if (!store.state.auth.token) {
    redirect('/login')
  }
}

export default auth
