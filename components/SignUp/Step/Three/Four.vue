<script setup lang="ts">
import { signUpThreeStepFormDataKey } from '~/assets/libs';

defineOptions({
  name: 'SignUpStepThreeFour'
});
const { lgAndDown } = useDefaultBreakpoints();
const { ruleFormRef, rules } = useForm();
const signUpStepThreeFormData = inject(signUpThreeStepFormDataKey)!;

const formData = reactive<
  Pick<
    typeof signUpStepThreeFormData,
    'storeName' | 'productCategory' | 'stockCity' | 'catalogItemsCount' | 'site'
  >
>({
  storeName: '',
  productCategory: '',
  stockCity: '',
  catalogItemsCount: '',
  site: ''
});
const isFormValid = ref(false);
const formRules = computed(() => ({
  ...rules,
  storeName: [{ required: true, trigger: 'change' }],
  productCategory: [{ required: true, trigger: 'change' }],
  stockCity: [{ required: true, trigger: 'change' }],
  catalogItemsCount: [{ required: true, trigger: 'change' }]
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
      Информация о магазине
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
          <el-form-item label="Название магазина" prop="storeName">
            <el-input v-model="formData.storeName" @input="checkValidation" />
          </el-form-item>
        </div>
        <div class="col-12 col-lg-6">
          <el-form-item
            label="Основная категория товаров"
            prop="productCategory"
          >
            <el-select
              v-model="formData.productCategory"
              placeholder="Выберите категорию"
              @change="checkValidation"
            >
              <el-option label="Прямая" value="1" />
              <el-option label="Кривая" value="2" />
            </el-select>
          </el-form-item>
        </div>
        <div class="col-12 col-lg-6">
          <el-form-item label="Город, где хранятся товары" prop="storeName">
            <el-input v-model="formData.stockCity" @input="checkValidation" />
          </el-form-item>
        </div>
        <div class="col-12 col-lg-6">
          <el-form-item
            label="Количество позиций в каталоге"
            prop="catalogItemsCount"
          >
            <el-select
              v-model="formData.catalogItemsCount"
              placeholder="Выберите количество"
              @change="checkValidation"
            >
              <el-option label="Прямая" value="1" />
              <el-option label="Кривая" value="2" />
            </el-select>
          </el-form-item>
        </div>
        <div class="col-12">
          <el-form-item label="Сайт (если имеется)" prop="site">
            <el-input v-model="formData.site" @input="checkValidation" />
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
