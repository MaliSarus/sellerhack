<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { signUpThreeStepFormDataKey } from '~/assets/libs';

defineOptions({
  name: 'SignUpStepThreeSix'
});
const signUpStepThreeFormData = inject(signUpThreeStepFormDataKey)!;
const { lgAndDown } = useDefaultBreakpoints();
const handleClick = (callback: () => void) => {
  console.table(signUpStepThreeFormData);
  callback();
};
</script>

<template>
  <TheStepsItem
    v-slot="{ stepPlus }"
    class="sign-up-three-step-six content color_text-secondary text-s text-m_lg"
  >
    <div class="sign-up-three-step-six__wrapper">
      <div
        class="sign-up-three-step-six__title color_text-primary h3-mobile h3-desktop_md h3-desktop_lg"
      >
        Вы успешно заполнили заявку!
      </div>
      <p>
        В течение 24 часов мы проверим вашу заявку и направим вам письмо с
        офертой - нашим согласием заключить с вами Договор.
        <br /><br />
        Как только вы начнёте работу на нашем маркетплейсе, Договор будет
        считаться заключенным.
      </p>
      <div class="sign-up-three-step-six__control">
        <el-button
          plain
          :size="!lgAndDown ? 'large' : undefined"
          @click="handleClick(stepPlus)"
        >
          Завершить регистрацию
        </el-button>
      </div>
    </div>
  </TheStepsItem>
</template>

<style lang="scss" scoped>
.sign-up-three-step-six {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 20px;
  @include media-breakpoint-up(lg) {
    line-height: 26px;
  }
  &__wrapper {
    @include media-breakpoint-up(md) {
      max-width: 656px;
    }
    @include media-breakpoint-up(lg) {
      max-width: 696px;
    }
  }
  &__title {
    margin-bottom: var(--space-6);
    @include media-breakpoint-up(lg) {
      margin-bottom: var(--space-7);
    }
  }
  &__control {
    margin-top: 64px;
    @include media-breakpoint-up(lg) {
      margin-top: 70px;
    }
  }
}
</style>
