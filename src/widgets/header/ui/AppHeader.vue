<template>
  <header class="header">
    <nav class="nav">
      <a v-for="item in navItems" :key="item.path" :href="item.path" class="nav-item">
        {{ item.icon }} {{ t(`nav.${item.key}`) }}
      </a>
    </nav>
    <input type="text" class="search-box" :placeholder="t('common.search')">
    <div class="user-profile">
      <span class="earnings">Earning: $97,154</span>
    </div>
    <LanguageSwitcher />
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { LanguageSwitcher } from '@/features/language-switcher';

const { t } = useI18n();

const navItems = [
  { key: 'dashboard', icon: '📊', path: '/dashboard' },
  { key: 'ads', icon: '📈', path: '/ads' },
  { key: 'users', icon: '👥', path: '/users' },
  { key: 'analytics', icon: '📊', path: '/analytics' },
  { key: 'calendar', icon: '📅', path: '/calendar' },
  { key: 'support', icon: '💬', path: '/support' },
  { key: 'settings', icon: '⚙️', path: '/settings' }
];
</script>

<style scoped>
.header {
  @apply flex justify-between items-center p-4 border-b border-gray-200;
}

.nav {
  @apply flex gap-6;
}

.nav-item {
  @apply flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors;
}

.search-box {
  @apply px-4 py-2 border border-gray-200 rounded-full w-48;
}

.earnings {
  @apply text-blue-500 font-semibold;
}
</style>