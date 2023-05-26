<script setup lang="ts">
import {
  signUpFormDataKey,
  signUpCurrentStepKey,
  removeSymbols
} from '~/assets/libs';
import { Countries } from 'ui-layer/assets/libs';
defineOptions({
  name: 'SignUpStepOne'
});

const signUpFormData = inject(signUpFormDataKey)!;
const signUpCurrentStep = inject(signUpCurrentStepKey)!;
const { ruleFormRef, rules, resetValidationForField, validateForm } = useForm();

const currentMask = ref(
  Countries.find((countryItem) => countryItem.iso === 'RU')?.mask
);

const formRules = computed(() => ({
  ...rules,
  phone: [
    ...rules.phone,
    {
      len: (currentMask.value as string).replace(/[{}]/gi, '').length,
      message: `Длинна номера ${
        formData.phoneCode.length +
        removeSymbols((currentMask.value as string).replace(/[{}]/gi, ''))
          .length
      } символов`
    }
  ]
}));

const formData = reactive<Pick<typeof signUpFormData, 'phone' | 'phoneCode'>>({
  phone: '',
  phoneCode: '+7'
});
const { lgAndDown } = useDefaultBreakpoints();
const handleSubmit = () => {
  validateForm().then(() => {
    Object.assign(signUpFormData, formData);
    signUpCurrentStep.value += 1;
  });
};
const handleMaskChange = (e: string) => {
  currentMask.value = e;
};
const handleCountryChange = (e: string) => {
  formData.phoneCode = e;
  resetValidationForField('phone');
};
</script>
<template>
  <TheBox class="sign-up-box">
    <div class="sign-up-box__body content">
      <div
        class="sign-up-box__title color_text-primary subtitle2-mobile subtitle2-tablet_md subtitle2-desktop_lg"
      >
        Введите номер телефона
      </div>
      <p class="color_text-secondary text-s text-m_lg">
        На указанный номер телефона будет отправлено СМС с кодом подтверждения
      </p>
      <el-form
        ref="ruleFormRef"
        :rules="formRules"
        :model="formData"
        class="sign-up-box__form content"
        novalidate
        :validate-on-rule-change="false"
        @submit.prevent="handleSubmit"
      >
        <el-form-item prop="phone">
          <UiCountryPhoneInput
            v-model="formData.phone"
            :size="lgAndDown ? 'small' : undefined"
            :validate-event="false"
            @country-change="handleCountryChange"
            @input="resetValidationForField('phone')"
            @mask-change="handleMaskChange"
          />
        </el-form-item>
        <div class="sign-up-box__form-controls">
          <el-button
            type="primary"
            native-type="submit"
            :size="!lgAndDown ? 'large' : undefined"
          >
            Получить код
          </el-button>
        </div>
      </el-form>
    </div>
  </TheBox>
</template>

<style lang="scss" scoped>
.sign-up-box {
  &__body {
    > * {
      margin: var(--space-5) 0;
      @include media-breakpoint-up(lg) {
        margin: var(--space-5) 0;
      }
    }
  }
  &__form {
    > * {
      margin: var(--space-5) 0;
      @include media-breakpoint-up(lg) {
        margin: var(--space-5) 0;
      }
    }
  }
  &__form-controls {
    .el-button {
      width: 100%;
      margin: 0;
    }
  }
}
</style>
