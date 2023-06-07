<template>
  <div class="flex min-h-screen w-full flex-col">
    <h1 class="m-auto text-lg font-semibold">Hello!</h1>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content:
        "This website is build using Nuxt3, TailwindCSS, TypeScript and more!",
    },
  ],
});
</script>
