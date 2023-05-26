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
    'country' | 'organizationForm' | 'inn' | 'ogrn' | 'organizationName'
  >
>({
  country: '',
  organizationForm: '',
  inn: '',
  ogrn: '',
  organizationName: ''
});
const isFormValid = ref(false);
const formRules = computed(() => ({
  ...rules,
  country: [{ required: true, trigger: 'change' }],
  organizationForm: [{ required: true, trigger: 'change' }],
  inn: [
    {
      required: false,
      trigger: 'change'
    },
    {
      min: 10,
      trigger: 'change',
      message: 'Длина ИНН 10 или 12 символов'
    },
    {
      pattern: /^(\d{10}|\d{12})$/i,
      trigger: 'change',
      message: 'Длина ИНН 10 или 12 символов'
    },
    {
      pattern: /^\d+$/i,
      trigger: 'change',
      message: 'В поле присутствуют недопустимые символы'
    }
  ],
  ...(formData.inn && {
    orgn: [
      {
        required: true,
        trigger: 'change',
        message: 'Поле не может быть пустым'
      },
      {
        min: 13,
        max: 15,
        trigger: 'change',
        message: 'Длина ОГРН 13 или 15 символов'
      },
      {
        pattern: /^(\d{13}|\d{15})$/i,
        trigger: 'change',
        message: 'Длина ОГРН 13 или 15 символов'
      },
      {
        pattern: /^\d+$/i,
        trigger: 'change',
        message: 'В поле присутствуют недопустимые символы'
      }
    ]
  }),
  ...(formData.inn && {
    organizationName: [
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
    ]
  })
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
      Заполните информацио о вашей компании
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
          <el-form-item label="Страна регистрации" prop="country">
            <el-select
              v-model="formData.country"
              placeholder=" "
              @change="checkValidation"
            >
              <el-option label="Россия" value="RU" />
              <el-option label="США" value="USA" />
            </el-select>
          </el-form-item>
        </div>
        <div class="col-12 col-lg-6">
          <el-form-item label="Форма организации" prop="organizationForm">
            <el-select
              v-model="formData.organizationForm"
              placeholder=" "
              @change="checkValidation"
            >
              <el-option label="Прямая" value="1" />
              <el-option label="Кривая" value="2" />
            </el-select>
          </el-form-item>
        </div>
        <div class="col-12 col-lg-6">
          <el-form-item label="ИНН" prop="inn">
            <el-input
              v-model="formData.inn"
              inputmode="numeric"
              :maxlength="12"
              :formatter="(value:string) => value.replace(/[^\d]/i, '')"
              @input="checkValidation"
            />
          </el-form-item>
        </div>
        <div v-if="formData.inn" class="col-12 col-lg-6">
          <el-form-item label="ОГРНИП" prop="ogrn">
            <el-input
              v-model="formData.ogrn"
              inputmode="numeric"
              maxlength="15"
              :formatter="(value:string) => value.replace(/[^\d]/i, '')"
              @input="checkValidation"
            />
          </el-form-item>
        </div>
        <div v-if="formData.inn" class="col-12">
          <el-form-item
            label="Наименование организации"
            prop="organizationName"
          >
            <el-input
              v-model="formData.organizationName"
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
