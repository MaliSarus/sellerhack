<script setup lang="ts">
defineOptions({
  name: "PricehackApp",
});
const route = useRoute();
useHead({
  title: `SellersHack${route.meta.title ? " - " + route.meta.title : ""}`,
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style lang="scss"></style>
