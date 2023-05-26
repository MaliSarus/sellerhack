<script setup lang="ts">
import { signUpThreeStepFormDataKey } from '~/assets/libs';
import { PaperClipIcon24 } from 'ui-layer/assets/icons';
import { UploadFile } from 'element-plus/es/components';

defineOptions({
  name: 'SignUpStepThreeThird'
});
const { lgAndDown } = useDefaultBreakpoints();
const { ruleFormRef, rules } = useForm();
const formRules = computed(() => {
  return {
    ...rules,
    documents: [
      {
        type: 'array',
        required: true,
        trigger: 'change'
      }
    ]
  };
});

const signUpStepThreeFormData = inject(signUpThreeStepFormDataKey)!;

const formData = reactive<Pick<typeof signUpStepThreeFormData, 'documents'>>({
  documents: []
});
const isFormValid = ref(false);
const fileObject = (file: File) => {
  return URL.createObjectURL(file);
};
const checkValidation = () => {
  nextTick(() => {
    ruleFormRef.value?.validate((isValid) => {
      isFormValid.value = isValid;
      ruleFormRef.value?.clearValidate();
    });
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
      Документы компании
      <p
        class="color_text-secondary text-s text-m_lg"
        style="margin-top: var(--space-3)"
      >
        Прикрепите необходимые документы
      </p>
    </div>
    <el-form
      ref="ruleFormRef"
      :model="formData"
      class="sign-up-three-step__form"
      label-position="top"
      hide-required-asterisk
      :rules="(formRules as any)"
      @submit.prevent="handleSubmit(stepPlus)"
    >
      <div class="row">
        <div class="col-12">
          <el-form-item
            label="Паспорт, регистрационное свидетельство ИП, ОГРНИП"
            prop="documents"
            @submit.prevent="handleSubmit(stepPlus)"
          >
            <el-upload
              v-model:file-list="formData.documents"
              drag
              multiple
              :auto-upload="false"
              style="width: 100%"
              accept="image/*,.pdf"
              :show-file-list="false"
              class="sign-up-three-step__upload"
              :on-change="() => checkValidation()"
            >
              <div
                class="upload-placeholder text-m color_disabled-text content"
              >
                <div class="upload-placeholder__control">
                  <el-button circle plain :icon="PaperClipIcon24" />
                </div>
                <p>Выберите файл</p>
                <p class="text-s color_tertiary">
                  Формат JPG, PNG, PDF. Размер - не более 32 Мб.
                </p>
              </div>
            </el-upload>
            <el-upload
              v-if="formData.documents.length"
              v-model:file-list="formData.documents"
              multiple
              :auto-upload="false"
              style="width: 100%"
              accept="image/*,.pdf"
              list-type="picture-card"
              class="sign-up-three-step__upload-thumbs"
            >
              <template #file="{ file }: { file: UploadFile }">
                <div v-if="file.raw?.type !== 'application/pdf'">
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="fileObject(file.raw as File)"
                    alt=""
                  />
                </div>

                <div v-else>
                  <PaperClipIcon24
                    class="color_text-secondary"
                    style="display: block; margin: 8px auto"
                  />
                  {{ file.raw.name }}
                </div>
              </template>
            </el-upload>
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
  &__upload {
    :deep(.el-upload-dragger) {
      padding: var(--space-4) var(--space-3);
    }

    .upload-placeholder {
      text-align: center;
      > * {
        margin: var(--space-2) 0;
      }
    }
  }
  &__upload-thumbs {
    margin-top: var(--space-4);
    :deep(.el-upload) {
      display: none;
    }
  }
}
</style>
