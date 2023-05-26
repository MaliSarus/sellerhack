<script setup lang="ts">
import {
  HomeIcon24,
  CategoryIcon24,
  ShoppingCartIcon24,
  HeartIcon24,
  UserIcon24,
  HomeSolidIcon24,
  CategorySolidIcon24,
  ShoppingCartSolidIcon24,
  HeartSolidIcon24,
  UserSolidIcon24
} from 'ui-layer/assets/icons';
defineOptions({
  name: 'MobileMenu'
});
</script>

<template>
  <div class="mobile-menu d-lg-none bg-color_bg-light shadow-s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="mobile-menu__block">
            <nav>
              <ul>
                <li>
                  <NuxtLink :to="{ name: 'index' }">
                    <HomeIcon24 />
                    <HomeSolidIcon24 />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'index' }">
                    <CategoryIcon24 />
                    <CategorySolidIcon24 />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'index' }">
                    <el-badge value="1" :type="('error' as any)">
                      <ShoppingCartIcon24 />
                      <ShoppingCartSolidIcon24 />
                    </el-badge>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'index' }">
                    <HeartIcon24 />
                    <HeartSolidIcon24 />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'index' }">
                    <UserIcon24 />
                    <UserSolidIcon24 />
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: var(--space-5) 0;
  z-index: 100;
  @include media-breakpoint-up(md) {
    padding: var(--space-6) 0;
  }
  &__block {
    nav {
      ul {
        display: flex;
        justify-content: space-between;
        padding: 0 var(--space-4);
        @include media-breakpoint-up(md) {
          padding: 0 44px;
        }
        li {
          // margin: 0 22px;
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
          a {
            position: relative;
            display: block;
            color: var(--dividers-color);
            &:hover,
            &:focus-visible,
            &.router-link-active {
              color: var(--accent1-primary-color);
              svg {
                &:nth-child(1) {
                  display: none;
                }
              }
            }
            &.router-link-active {
              &:hover,
              &:focus-visible {
                color: var(--hover-state-color);
              }
              &:active {
                color: var(--click-state-color);
              }
            }
            &:active {
              color: var(--click-state-color);
            }
            &:not(:focus-visible):not(:hover):not(.router-link-active) {
              svg {
                &:nth-child(2) {
                  display: none;
                }
              }
            }
            svg {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
