<template>
  <div class="language-switcher">
    <button
      v-for="lang in languages"
      :key="lang"
      class="lang-btn"
      :class="{ active: currentLocale === lang }"
      @click="switchLanguage(lang)"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);
const languages = ['en', 'ru'];

const switchLanguage = (lang: string) => {
  locale.value = lang;
};
</script>

<style scoped>
.language-switcher {
  @apply flex gap-2;
}

.lang-btn {
  @apply px-3 py-1 rounded-full border border-gray-200 hover:bg-blue-500 hover:text-white transition-colors;
}

.lang-btn.active {
  @apply bg-blue-500 text-white border-blue-500;
}
</style>