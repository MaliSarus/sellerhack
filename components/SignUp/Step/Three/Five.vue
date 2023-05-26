<script setup lang="ts">
import { signUpThreeStepFormDataKey } from '~/assets/libs';

defineOptions({
  name: 'SignUpStepThreeTwo'
});
const { lgAndDown } = useDefaultBreakpoints();
const { ruleFormRef, rules } = useForm();
const signUpStepThreeFormData = inject(signUpThreeStepFormDataKey)!;

const formData = reactive<
  Pick<
    typeof signUpStepThreeFormData,
    'bankBik' | 'bankName' | 'rBill' | 'kBill'
  >
>({
  bankBik: '',
  bankName: '',
  rBill: '',
  kBill: ''
});
const isFormValid = ref(false);
const formRules = computed(() => ({
  ...rules,
  bankBik: [
    {
      required: true,
      trigger: 'change',
      message: 'Поле не может быть пустым'
    },
    {
      min: 9,
      max: 9,
      trigger: 'change',
      message: 'Длина БИК 9 символов'
    },
    {
      pattern: /^\d+$/i,
      trigger: 'change',
      message: 'В поле присутствуют недопустимые символы'
    }
  ],
  bankName: [
    {
      required: true,
      trigger: 'change',
      message: 'Обязательное поле'
    },
    {
      min: 2,
      trigger: 'change',
      message: 'Минимальная длина 2 символа'
    },
    {
      max: 255,
      trigger: 'change',
      message: 'Максимальная длина 255 символов'
    }
  ],
  kBill: [
    {
      required: true,
      trigger: 'change',
      message: 'Поле не может быть пустым'
    },
    {
      min: 20,
      max: 20,
      trigger: 'change',
      message: 'Длина корресп. счёта 20 символов'
    },
    {
      pattern: /^\d+$/i,
      trigger: 'change',
      message: 'В поле присутствуют недопустимые символы'
    }
  ],
  rBill: [
    {
      required: true,
      trigger: 'change',
      message: 'Поле не может быть пустым'
    },
    {
      min: 20,
      max: 20,
      trigger: 'change',
      message: 'Длина расчётного счёта 20 символов'
    },
    {
      pattern: /^\d+$/i,
      trigger: 'change',
      message: 'В поле присутствуют недопустимые символы'
    }
  ]
}));
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
      Платежные реквизиты
    </div>
    <el-form
      ref="ruleFormRef"
      class="sign-up-three-step__form"
      label-position="top"
      :model="formData"
      :rules="formRules"
      :show-message="false"
      :validate-on-rule-change="false"
      hide-required-asterisk
      @submit.prevent="handleSubmit(stepPlus)"
    >
      <div class="row">
        <div class="col-12 col-lg-6">
          <el-form-item label="БИК банка" prop="bankBik">
            <el-input
              v-model="formData.bankBik"
              inputmode="numeric"
              :maxlength="9"
              :formatter="(value:string) => value.replace(/[^\d]/i, '')"
              @input="checkValidation"
            />
          </el-form-item>
        </div>
        <div class="col-12 col-lg-6">
          <el-form-item label="Наименование банка" prop="bankName">
            <el-input v-model="formData.bankName" @input="checkValidation" />
          </el-form-item>
        </div>
        <div class="col-12 col-lg-6">
          <el-form-item label="Расчетный счет" prop="rBill">
            <el-input
              v-model="formData.rBill"
              inputmode="numeric"
              :maxlength="20"
              :formatter="(value:string) => value.replace(/[^\d]/i, '')"
              @input="checkValidation"
            />
          </el-form-item>
        </div>
        <div class="col-12 col-lg-6">
          <el-form-item label="Корреспондентский счет" prop="kBill">
            <el-input
              v-model="formData.kBill"
              inputmode="numeric"
              :maxlength="20"
              :formatter="(value:string) => value.replace(/[^\d]/i, '')"
              @input="checkValidation"
            />
          </el-form-item>
        </div>
      </div>

      <div class="sign-up-three-step__form-controls">
        <el-button
          type="primary"
          :size="!lgAndDown ? 'large' : undefined"
          :disabled="!isFormValid"
          native-type="submit"
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
    .el-select {
      display: block;
      width: 100%;
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
