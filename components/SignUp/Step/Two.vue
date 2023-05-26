<script setup lang="ts">
import { signUpFormDataKey, signUpCurrentStepKey } from '~/assets/libs';
import IMask from 'imask';
import VueCountdown from '@chenfengyuan/vue-countdown';

defineOptions({
  name: 'SignUpStepTwo'
});

const signUpFormData = inject(signUpFormDataKey)!;
const signUpCurrentStep = inject(signUpCurrentStepKey)!;

const { lgAndDown } = useDefaultBreakpoints();

const maskCode = IMask.createPipe({
  mask: '000 000'
});
const isCountDownEnd = ref(true); //Обратный отсчет завершен?
const { ruleFormRef, rules, resetValidationForField, validateForm } = useForm();
const handleCodeInput = (e: string) => {
  formData.code = maskCode(e);
  resetValidationForField('code');
};
const handleChangeNumber = () => {
  formData.code = '';
  signUpCurrentStep.value -= 1;
};
const formData = reactive<
  Pick<typeof signUpFormData, 'code'> & { agreement: boolean }
>({
  code: '',
  agreement: false
});
const handleSubmit = () => {
  validateForm().then(() => {
    Object.assign(signUpFormData, formData);
    signUpCurrentStep.value += 1;
  });
};
</script>
<template>
  <TheBox class="sign-up-box">
    <div class="sign-up-box__body content">
      <div
        class="sign-up-box__title color_text-primary subtitle2-mobile subtitle2-tablet_md subtitle2-desktop_lg"
      >
        Введите код из СМС
      </div>
      <p class="color_text-secondary text-s text-m_lg">
        Отправили код подтверждения на номер
        <br />
        <span style="text-decoration: underline"
          >{{ signUpFormData.phoneCode }} {{ signUpFormData.phone }}</span
        >
      </p>
      <el-form
        ref="ruleFormRef"
        :model="formData"
        :rules="rules"
        class="sign-up-box__form content"
        @submit.prevent="handleSubmit"
      >
        <el-form-item prop="code">
          <el-input
            :model-value="formData.code"
            :size="lgAndDown ? 'small' : undefined"
            :validate-event="false"
            @input="handleCodeInput"
          />
        </el-form-item>
        <el-form-item prop="agreement" class="sign-up-box__agreement">
          <el-checkbox
            v-model="formData.agreement"
            :validate-event="false"
            @change="resetValidationForField('agreement')"
          >
            <span class="text-xs color_text-secondary">
              Согласен с условиями пользовательского соглашения и условиями
              обработки персональных данных
            </span>
          </el-checkbox>
        </el-form-item>
        <div class="sign-up-box__form-controls">
          <el-button
            type="primary"
            native-type="submit"
            :disabled="!isCountDownEnd"
            :size="!lgAndDown ? 'large' : undefined"
          >
            Зарегистрироваться
          </el-button>
          <el-button
            :disabled="!isCountDownEnd"
            :size="!lgAndDown ? 'large' : undefined"
            @click="isCountDownEnd = false"
          >
            <template v-if="isCountDownEnd"> Получить новый код</template>

            <vue-countdown
              v-else
              v-slot="{ minutes, seconds }"
              :time="60 * 1000"
              @end="isCountDownEnd = true"
            >
              {{ minutes < 10 ? '0' + minutes : minutes }}:{{
                seconds < 10 ? '0' + seconds : seconds
              }}
            </vue-countdown>
          </el-button>
        </div>
      </el-form>
    </div>
    <template #footer>
      <div class="sign-up-box__footer">
        <el-button text @click="handleChangeNumber">Изменить номер</el-button>
      </div>
    </template>
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
      + .el-button {
        margin-top: var(--space-5);
        @include media-breakpoint-up(lg) {
          margin-top: var(--space-6);
        }
      }
    }
  }
  &__agreement {
    :deep(.el-form-item__error) {
      display: none !important;
    }
  }
  &__footer {
    padding: var(--space-5) 0 var(--space-6);
    text-align: center;
    .el-button {
      --el-button-font-weight: var(--text-m__font-weight);
      padding: 0;
      font-size: var(--text-m__font-size);
      line-height: var(--text-m__line-height);
      @include media-breakpoint-up(lg) {
        --el-button-font-weight: var(--text-l__font-weight);
        font-size: var(--text-l__font-size);
        line-height: var(--text-l__line-height);
      }
    }
  }
  :deep(.box__footer) {
    border-top: 1px solid var(--stroke-color);
    margin-left: calc(var(--space-3) * -1);
    margin-right: calc(var(--space-3) * -1);
    @include media-breakpoint-down(md) {
      margin-top: var(--space-5);
    }
  }
}
</style>
