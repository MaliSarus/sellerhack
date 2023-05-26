<script setup lang="ts">
import { TheStepsCurrentStepKey } from '~/assets/libs';

defineOptions({
  name: 'TheStepsItem'
});
const stepsCurrentStep = inject(TheStepsCurrentStepKey)!;
const stepPlus = () => {
  stepsCurrentStep.value += 1;
};
const stepMinus = () => {
  stepsCurrentStep.value -= 1;
};
const stepTo = (to: number) => {
  stepsCurrentStep.value = to;
};
</script>

<template>
  <div class="steps-item">
    <slot :step-plus="stepPlus" :step-minus="stepMinus" :step-to="stepTo" />
  </div>
</template>

<style scoped></style>
