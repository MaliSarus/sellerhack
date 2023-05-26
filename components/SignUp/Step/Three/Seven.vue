<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
defineOptions({
  name: 'SignUpStepThreeSeven'
});
const { lgAndDown } = useDefaultBreakpoints();
</script>

<template>
  <TheStepsItem
    class="sign-up-three-step-six content color_text-secondary text-s text-m_lg"
  >
    <div class="sign-up-three-step-six__wrapper">
      <div
        class="sign-up-three-step-six__title color_text-primary h3-mobile h3-desktop_md h3-desktop_lg"
      >
        Ваша заявка в обработке
      </div>
      <p>
        В течение 24 часов мы проверим вашу заявку и направим вам письмо с
        офертой - нашим согласием заключить с вами Договор.
        <br /><br />
        Как только вы начнёте работу на нашем маркетплейсе, Договор будет
        считаться заключенным.
      </p>
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
