import { Action, Module, VuexModule } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

interface UpdatePayload {
  file: Blob
}

@Module({ name: 'users/avatar', stateFactory: true, namespaced: true })
export default class UserAvatar extends VuexModule {
  @Action
  public async update(payload: UpdatePayload) {
    const formData = new FormData()
    formData.append('file', payload.file)

    const avatar = await $axios.$put('/users/avatar', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })

    this.context.commit('users/SET_USER_AVATAR', avatar, { root: true })
  }
}
