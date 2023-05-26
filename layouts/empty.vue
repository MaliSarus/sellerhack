<script lang="ts">
export default {
  name: "EmptyTemplate",
};
</script>
<script setup lang="ts"></script>
<template>
  <div class="default-template">
    <EmptyHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
