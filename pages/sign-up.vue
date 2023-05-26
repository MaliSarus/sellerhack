<script setup lang="ts">
import { SignUpStepOne } from '#components';
import { signUpCurrentStepKey, signUpFormDataKey } from '~/assets/libs';

defineOptions({
  name: 'SignUpPage'
});
definePageMeta({
  title: 'Регистрация',
  layout: 'empty'
});

const asyncComponentsName = ['Two', 'Three'];

const currentStep = ref(-1);
const currentStepComponent = computed(() => {
  if (currentStep.value >= 0)
    return defineAsyncComponent(
      () =>
        import(
          `~/components/SignUp/Step/${
            asyncComponentsName[currentStep.value]
          }.vue`
        )
    );
  return SignUpStepOne;
});

const formData = reactive({
  phone: '',
  code: '',
  phoneCode: '',

});
provide(signUpCurrentStepKey, currentStep);
provide(signUpFormDataKey, formData);
</script>
<template>
  <div class="sign-up-page">
    <section class="sign-up-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="sign-up-section__block">
              <ClientOnly>
                <template #fallback>
                  <div style="text-align: center">
                    <UiLoader />
                  </div>
                </template>
                <Transition name="slide-up" mode="out-in">
                  <component :is="currentStepComponent" />
                </Transition>
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.sign-up-section {
  &__block {
    margin-top: 68px;
    @include media-breakpoint-up(md){
      margin-top: 88px;
    }
    @include media-breakpoint-up(lg){
      margin-top: 140px;
    }
    @include media-breakpoint-up(xl){
      margin-top: 132px;
    }
    .sign-up-box {
      margin: 0 auto;
      @include media-breakpoint-down(md) {
        --el-card-padding: 0;
        --el-box-shadow-light: none;
        --el-card-border-radius: 0;
      }
      @include media-breakpoint-up(md) {
        max-width: 384px;
      }
      @include media-breakpoint-up(lg) {
        max-width: 392px;
      }
    }
  }
}
</style>
