<script lang="ts">
export default {
  name: "DefaultTemplate",
};
</script>
<script setup lang="ts"></script>
<template>
  <div class="default-template">
    <TheHeader />
    <main>
      <slot />
    </main>
    <MobileMenu />
  </div>
</template>
