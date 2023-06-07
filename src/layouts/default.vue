<script setup lang="ts">
const colorMode = useColorMode();
if (typeof window !== "undefined") {
  const html = document.querySelector("html");

  if (html !== null) {
    html.dataset.theme = colorMode.value;
    html.dataset.themeType = colorMode.preference;
    localStorage.setItem("color-theme", colorMode.value);

    html.addEventListener("change", () => {
      html.dataset.theme = colorMode.value;
      html.dataset.themeType = colorMode.preference;
      localStorage.setItem("color-theme", colorMode.value);
    });
  }
}
</script>

<template>
  <main class="bg-slate-200 dark:bg-stone-950 dark:text-gray-300">
    <slot />
  </main>
</template>
