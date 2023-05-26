<script lang="ts">
export default {
  name: 'TheHeader'
};
</script>
<script setup lang="ts">
import {
  LogoIcon,
  CategoryIcon24,
  BoxIcon24,
  ShoppingCartIcon24,
  HeartIcon24,
  LocationIcon12,
  SearchIcon24,
  MenuIcon24
} from 'ui-layer/assets/icons';

const search = ref('');
</script>

<template>
  <header class="header shadow-s">
    <div class="header__top hidden-lg-and-down bg-color_accent1-quaternary">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header__top-block">
              <div
                class="header__location color_text-primary text-xs-semibold text-s-semibold_xl"
              >
                <el-icon><LocationIcon12 /></el-icon>Ханты-Мансийск
              </div>
              <nav class="header__nav">
                <ul
                  class="header__nav-list color_text-secondary text-xs text-s_xl"
                >
                  <li class="header__nav-item">
                    <router-link to="/">Оплата</router-link>
                  </li>
                  <li class="header__nav-item">
                    <router-link to="/">Возврат</router-link>
                  </li>
                  <li class="header__nav-item">
                    <router-link to="/">Доставка</router-link>
                  </li>
                  <li class="header__nav-item">
                    <router-link to="/">Контакты</router-link>
                  </li>
                </ul>
              </nav>
              <a
                href="tel:+78634565676"
                class="header__phone color_text-primary text-s-semibold text-m-semibold_xl"
                >+ 7 (863) 456-56-76</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom header-bottom bg-color_bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header__bottom-block">
              <div class="header-bottom__left">
                <el-button
                  :icon="MenuIcon24"
                  type="primary"
                  circle
                  class="hidden-md-and-down d-lg-none"
                  style="margin-right: var(--space-5)"
                />
                <router-link class="header__logo" to="/">
                  <LogoIcon />
                </router-link>
              </div>

              <div class="header-bottom__center">
                <el-button
                  :icon="CategoryIcon24"
                  type="primary"
                  class="hidden-lg-and-down d-xl-none"
                  >Каталог</el-button
                >
                <el-button
                  :icon="CategoryIcon24"
                  type="primary"
                  size="large"
                  class="hidden-xl-and-down"
                  >Каталог</el-button
                >
                <the-search
                  v-model="search"
                  class="hidden-xl-and-down"
                  placeholder="Поиск по товарам"
                />
                <the-search
                  v-model="search"
                  class="hidden-md-and-down d-xl-none"
                  size="small"
                  placeholder="Поиск по товарам"
                />
                <el-button
                  :icon="SearchIcon24"
                  plain
                  circle
                  class="d-md-none"
                  style="margin-left: auto"
                />
              </div>
              <div class="header-bottom__right hidden-lg-and-down">
                <nav class="header-bottom__nav">
                  <ul class="header-bottom__nav-list">
                    <li class="header-bottom__nav-item">
                      <RouterLink to="/" class="icon-and-text-link">
                        <el-icon
                          class="icon-and-text-link__icon color_text-secondary"
                        >
                          <BoxIcon24 />
                        </el-icon>
                        <span
                          class="icon-and-text-link__text color_text-tertiary text-xs hidden-xl-and-down"
                        >
                          <span>Заказы</span>
                        </span>
                      </RouterLink>
                    </li>
                    <li class="header-bottom__nav-item">
                      <RouterLink to="/" class="icon-and-text-link">
                        <el-badge value="1" :type="('error' as any)">
                          <el-icon
                            class="icon-and-text-link__icon color_text-secondary"
                          >
                            <ShoppingCartIcon24 />
                          </el-icon>
                        </el-badge>
                        <span
                          class="icon-and-text-link__text color_text-tertiary text-xs hidden-xl-and-down"
                        >
                          <span>Корзина</span>
                        </span>
                      </RouterLink>
                    </li>
                    <li class="header-bottom__nav-item">
                      <RouterLink to="/" class="icon-and-text-link">
                        <el-icon
                          class="icon-and-text-link__icon color_text-secondary"
                        >
                          <HeartIcon24 />
                        </el-icon>
                        <span
                          class="icon-and-text-link__text color_text-tertiary text-xs hidden-xl-and-down"
                        >
                          <span>Избранное</span>
                        </span>
                      </RouterLink>
                    </li>
                  </ul>
                </nav>
                <UiAvatar
                  user-name="Александр Габелко"
                  size="s"
                  class="hidden-xl-and-up"
                />
                <UiAvatar
                  user-name="Александр Габелко"
                  class="hidden-xl-and-down"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid var(--bg-dark-color);
  position: sticky;
  top: 0px;
  margin-bottom: var(--space-5);
  z-index: 10;
  @include media-breakpoint-up(md) {
    margin-bottom: var(--space-6);
  }
  &__top-block {
    display: flex;
    align-items: center;
    padding: var(--space-3) 0;
  }
  &__bottom {
    .header-bottom {
      &__left {
        margin-right: var(--space-9);
        display: flex;
        align-items: center;
      }
      &__center {
        display: flex;
        align-items: center;
        flex-grow: 1;
        .search {
          flex-grow: 1;
          margin-left: var(--space-1);
          @include media-breakpoint-up(lg) {
            margin-left: var(--space-4);
          }
        }
      }
      &__right {
        display: flex;
        align-items: center;
        margin-left: var(--space-8);
        @include media-breakpoint-up(xl) {
          margin-left: var(--space-7);
        }
        .avatar {
          margin-left: var(--space-1);
          @include media-breakpoint-up(xl) {
            margin-left: var(--space-4);
          }
        }
      }
      &__nav-list {
        display: flex;
      }
      &__nav-item {
        &:not(:last-child) {
          margin-right: var(--space-2);
          @include media-breakpoint-up(xxl) {
            margin-right: var(--space-4);
          }
        }
        .icon-and-text-link {
          padding: var(--space-2);
          text-align: center;
          @include media-breakpoint-up(xl) {
            padding: var(--space-1) 0;
            width: 64px;
          }
          &__icon {
            font-size: 24px;
            @include media-breakpoint-down(xl) {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
  &__bottom-block {
    display: flex;
    align-items: center;
    padding: var(--space-4) 0;
    @include media-breakpoint-up(md) {
      padding: var(--space-5) 0;
    }
    @include media-breakpoint-up(xl) {
      padding: var(--space-6) 0;
    }
  }
  &__location {
    margin-right: 40px;
    display: inline-flex;
    align-items: center;
    .el-icon {
      font-size: 12px;
      margin-right: var(--space-1);
      @include media-breakpoint-up(xl) {
        font-size: 16px;
      }
    }
  }
  &__phone {
    margin-left: auto;
    text-decoration: none;
  }
  &__nav-list {
    display: flex;
  }
  &__nav-item {
    &:not(:last-child) {
      margin-right: var(--space-6);
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  &__logo {
    display: block;
    svg {
      display: block;
      width: 135px;
      height: 28px;
      @include media-breakpoint-up(lg) {
        width: 176px;
        height: 40px;
      }
      @include media-breakpoint-up(xl) {
        width: 217px;
        height: 48px;
      }
    }
  }
}
</style>
