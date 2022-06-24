<template>
  <form @submit.prevent="onSubmit">
    <div class="fom-field">
      <BaseInput v-model="user.email" type="email" placeholder="E-mail" readonly />
    </div>
    <div class="fom-field">
      <BaseInput v-model="user.name" type="text" placeholder="Nome" />
    </div>
    <div class="fom-field">
      <BaseInput v-model="user.password" type="password" placeholder="Senha" />
    </div>
    <div class="fom-field">
      <BaseInput v-model="user.passwordConfirmation" type="password" placeholder="Repita a senha" />
    </div>
    <BaseButton text="Próxima etapa" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { userRegister } from '@/store'

export default Vue.extend({
  data() {
    return {
      user: {
        email: userRegister.$user.email,
        name: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        await userRegister.update({
          key: this.$route.params.key,
          ...this.user
        })
        this.$notify({ type: 'success', text: 'Usuário cadastrado com sucesso' })
        this.$router.push('/login')
      } catch {
        this.$notify({ type: 'error', text: 'Ocorreu um erro ao atualizar o usuário' })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
form {
  display: grid;
  grid-gap: 0.8rem;
  button {
    width: 100%;
  }
  a {
    justify-self: end;
    font-size: 14px;
    color: color(white);
  }
  input {
    width: 100% !important;
    padding: 0.7rem 1.2rem;
  }
}
</style>
