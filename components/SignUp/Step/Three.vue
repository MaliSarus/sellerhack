<script setup lang="ts">
import { signUpThreeStepFormDataKey } from '~/assets/libs';
import { SignUpStepThreeOne } from '#components';
import { CheckIcon16 } from 'ui-layer/assets/icons';

defineOptions({
  name: 'SignUpStepThree'
});
const formData = reactive({
  name: '',
  lastName: '',
  email: '',
  country: '',
  organizationForm: '',
  inn: '',
  ogrn: '',
  organizationName: '',
  documents: [],
  storeName: '',
  productCategory: '',
  stockCity: '',
  catalogItemsCount: '',
  site: '',
  bankBik: '',
  bankName: '',
  rBill: '',
  kBill: ''
});
provide(signUpThreeStepFormDataKey, formData);
const currentStep = ref(0);
const steps = [
  {
    name: 'Контактная информация',
    componentName: 'One'
  },
  {
    name: 'Информация о компании',
    componentName: 'Two'
  },
  {
    name: 'Документы компании',
    componentName: 'Third'
  },
  {
    name: 'Информация о магазине',
    componentName: 'Four'
  },
  {
    name: 'Платежные реквизиты',
    componentName: 'Five'
  },
  {
    name: '',
    componentName: 'Six'
  },
  {
    name: '',
    componentName: 'Seven'
  }
];

const currentStepComponent = computed(() => {
  if (currentStep.value > 0)
    return defineAsyncComponent(
      () =>
        import(
          `~/components/SignUp/Step/Three/${
            steps[currentStep.value].componentName
          }.vue`
        )
    );
  return SignUpStepThreeOne;
});
</script>
<template>
  <el-card class="tabbed-form-card">
    <div class="tabbed-form-card__block">
      <div v-if="steps[currentStep].name" class="tabbed-form-card__tabs">
        <ul class="text-m color_disabled-text">
          <li
            v-for="(step, index) in steps"
            :key="index"
            class="tabbed-form-card__tab"
            :class="{ active: currentStep >= index, 'd-none': !step.name }"
          >
            <div class="tabbed-form-card__tab-number btn-s">
              <CheckIcon16 v-if="currentStep > index" />
              <template v-else>
                {{ index + 1 }}
              </template>
            </div>
            <div class="tabbed-form-card__tab-name hidden-md-and-down">
              {{ step.name }}
            </div>
          </li>
        </ul>
      </div>
      <div class="tabbed-form-card__steps">
        <TheSteps v-model="currentStep">
          <Transition name="fade" mode="out-in">
            <component :is="currentStepComponent" />
          </Transition>
        </TheSteps>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.tabbed-form-card {
  --el-card-border-color: var(--stroke-color);
  --el-card-border-radius: var(--buttons-big-radius);
  --el-card-padding: 0;
  --el-card-bg-color: var(--white-color);
  --el-box-shadow-light: var(--shadow-s);
  @include media-breakpoint-down(md) {
    --el-card-border-color: rgba(var(--white-color--rgb), 0);
    --el-card-border-radius: 0;
    --el-box-shadow-light: none;
  }
  @include media-breakpoint-up(md) {
    display: flex;
    min-height: 720px;
  }
  @include media-breakpoint-up(lg) {
    min-height: 936px;
  }
  :deep(.el-card__body) {
    @include media-breakpoint-up(md) {
      flex-grow: 1;
    }
  }
  &__block {
    @include media-breakpoint-up(md) {
      display: flex;
      min-height: 100%;
    }
  }
  &__tabs {
    flex-shrink: 0;
    margin-bottom: var(--space-7);
    @include media-breakpoint-up(md) {
      margin-bottom: 0;
      flex-basis: 224px;
      border-right: 1px solid var(--stroke-color);
      background-color: var(--accent1-five-color);
      padding: 32px 28px;
    }
    @include media-breakpoint-up(lg) {
      flex-basis: 216px;
      padding: 36px 24px;
    }
    ul {
      @include media-breakpoint-down(md) {
        display: flex;
      }
    }
  }
  &__tab {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-right: var(--space-3);
      @include media-breakpoint-up(md) {
        margin-right: 0;
        margin-bottom: var(--space-5);
      }
      &::after {
        width: 8px;
        height: 1px;
        background-color: var(--stroke-color);
        display: block;
        content: '';
        margin-left: var(--space-3);
      }
    }
    &::after {
      @include media-breakpoint-up(md) {
        content: none;
      }
    }

    &.active {
      color: var(--accent1-primary-color);
      font-weight: var(--text-m-medium__font-weight);
      .tabbed-form-card {
        &__tab-number {
          background-color: var(--accent1-primary-color);
          color: var(--white-color);
        }
      }
    }
  }
  &__tab-number {
    height: 24px;
    min-width: 24px;
    background-color: var(--disabled-bg-color);
    color: var(--disabled-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    @include media-breakpoint-up(md) {
      background-color: var(--white-color);
      margin-right: var(--space-3);
    }
  }
  &__steps {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    @include media-breakpoint-up(md) {
      padding: var(--space-7) var(--space-6) var(--space-6);
    }
    .steps {
      flex-grow: 1;
      .steps-item {
        height: 100%;
      }
    }
  }
}
</style>
