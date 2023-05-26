<script setup lang="ts">
import { LogoIcon } from 'app-layer/assets/icons';

defineOptions({
  name: 'EmptyHeader'
});
</script>

<template>
  <header class="empty-header shadow-s bg-color_bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="empty-header__block">
            <div class="empty-header__left">
              <div class="empty-header__logo">
                <LogoIcon />
              </div>
            </div>
            <div class="empty-header__right">
              <nuxt-link v-slot="{ navigate }" :to="{ name: 'sign-up' }" custom>
                <el-button
                  class="hidden-lg-and-down d-xl-none"
                  @click="navigate"
                  >Регистрация</el-button
                >
              </nuxt-link>
              <nuxt-link v-slot="{ navigate }" to="/" custom>
                <el-button
                  type="primary"
                  class="hidden-lg-and-down d-xl-none"
                  @click="navigate"
                  >Вход</el-button
                >
              </nuxt-link>
              <nuxt-link v-slot="{ navigate }" :to="{ name: 'sign-up' }" custom>
                <el-button
                  size="large"
                  class="hidden-xl-and-down"
                  @click="navigate"
                  >Регистрация</el-button
                >
              </nuxt-link>
              <nuxt-link v-slot="{ navigate }" to="/" custom>
                <el-button
                  type="primary"
                  size="large"
                  class="hidden-xl-and-down"
                  @click="navigate"
                  >Вход</el-button
                >
              </nuxt-link>
              <UiAvatar size="s" class="d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.empty-header {
  padding: var(--space-3) 0 ;
  position: sticky;
  top: 0;
  z-index: 10;
  @include media-breakpoint-up(md){
    padding: var(--space-4) 0;
  }
  @include media-breakpoint-up(lg){
    padding: var(--space-5) 0;
  }
  &__block {
    display: flex;
    align-items: center;
  }
  &__left {
    flex-shrink: 0;
    margin-right: auto;
  }
  &__right {
    display: flex;
    align-items: center;
    .el-button {
      + .el-button {
        margin-left: var(--space-4);
        @include media-breakpoint-up(xl) {
          margin-left: var(--space-5);
        }
      }
    }
  }
  &__logo {
    flex-shrink: 0;
    svg{
      display: block;
      width: 151px;
      height: 28px;
      @include media-breakpoint-up(lg){
        width: 198px;
        height: 36px;
      }
    }
  }
}
</style>
