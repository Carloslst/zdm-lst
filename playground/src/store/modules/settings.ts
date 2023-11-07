import { defineStore } from 'pinia';
import defaultSettings from '@/settings';

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings;

export const useDefaultSettings = defineStore({
  id: 'default-settings',
  state: () => ({
    theme: '$--color-primary',
    showSettings: showSettings,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo,
  }),
  actions: {
    changeSetting(key: 'theme' | 'showSettings' | 'tagsView' | 'fixedHeader' | 'sidebarLogo', value: any) {
      if (Object.prototype.hasOwnProperty.call(this.$state, key)) {
        this[key] = value;
      }
    },
  },
});
