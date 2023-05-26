<script setup lang="ts">
import { TheStepsCurrentStepKey } from '~/assets/libs';
defineOptions({
  name: 'TheSteps'
});
const props = defineProps<{
  modelValue: number;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', data: number): void;
}>();
const currentStep = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emit('update:modelValue', newVal);
  }
});
provide(TheStepsCurrentStepKey, currentStep);
</script>

<template>
  <div class="steps">
    <slot :current-step="currentStep" />
  </div>
</template>

<style scoped></style>
