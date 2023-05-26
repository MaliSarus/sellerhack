<script setup lang="ts">
import { signUpThreeStepFormDataKey } from '~/assets/libs';

defineOptions({
  name: 'SignUpStepThreeOne'
});
const signUpStepThreeFormData = inject(signUpThreeStepFormDataKey)!;
const { lgAndDown } = useDefaultBreakpoints();
const { rules, ruleFormRef } = useForm();
const formData = reactive<
  Pick<typeof signUpStepThreeFormData, 'name' | 'lastName' | 'email'>
>({
  name: '',
  lastName: '',
  email: ''
});
const isFormValid = ref(false);
const checkValidation = () => {
  ruleFormRef.value?.validate((isValid) => {
    isFormValid.value = isValid;
    ruleFormRef.value?.clearValidate();
  });
};
const handleSubmit = (callback: () => void) => {
  Object.assign(signUpStepThreeFormData, formData);
  callback();
};
onMounted(() => {
  checkValidation();
});
</script>

<template>
  <TheStepsItem v-slot="{ stepPlus }" class="sign-up-three-step content">
    <div
      class="sign-up-three-step__title color_text-primary subtitle2-mobile subtitle2-tablet_md subtitle2-desktop_lg"
    >
      Контактная информация
    </div>
    <el-form
      ref="ruleFormRef"
      :model="formData"
      :rules="rules"
      class="sign-up-three-step__form"
      label-position="top"
      hide-required-asterisk
      :show-message="false"
      @submit.prevent="handleSubmit(stepPlus)"
    >
      <div class="row">
        <div class="col-12 col-lg-6">
          <el-form-item label="Фамилия" prop="name">
            <el-input
              v-model="formData.name"
              :validate-event="false"
              @input="checkValidation"
            />
          </el-form-item>
        </div>
        <div class="col-12 col-lg-6">
          <el-form-item label="Имя" prop="lastName">
            <el-input
              v-model="formData.lastName"
              :validate-event="false"
              @input="checkValidation"
            />
          </el-form-item>
        </div>
        <div class="col-12 col-lg-6">
          <el-form-item label="E-mail для получения оповещений" prop="email">
            <el-input
              v-model="formData.email"
              type="email"
              :validate-event="false"
              @input="checkValidation"
            />
          </el-form-item>
        </div>
      </div>

      <div class="sign-up-three-step__form-controls">
        <el-button
          type="primary"
          :size="!lgAndDown ? 'large' : undefined"
          native-type="submit"
          :disabled="!isFormValid"
        >
          Продолжить
        </el-button>
      </div>
    </el-form>
  </TheStepsItem>
</template>

<style lang="scss" scoped>
.sign-up-three-step {
  display: flex;
  flex-direction: column;
  &__title {
    margin-bottom: var(--space-5);
    @include media-breakpoint-up(md) {
      margin-bottom: var(--space-6);
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .row {
      --bs-gutter-x: var(--space-6);
      --bs-gutter-y: var(--space-5);
      @include media-breakpoint-up(md) {
        --bs-gutter-y: var(--space-6);
      }
    }
  }
  &__form-controls {
    margin-top: var(--space-6);
    @include media-breakpoint-up(md) {
      margin-top: auto;
      padding-top: var(--space-6);
    }
    .el-button {
      width: 100%;
      @include media-breakpoint-up(md) {
        width: auto;
      }
      + .el-button {
        margin-left: 0;
      }
    }
  }
}
</style>
