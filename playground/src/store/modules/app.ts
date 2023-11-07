import Cookies from 'js-cookie';
import { defineStore } from 'pinia';

export const useMAppStore = defineStore({
  id: 'm_app',
  state: () => ({
    sidebar: {
      opened: Cookies.get('sidebarStatus') !== undefined ? !!+Cookies.get('sidebarStatus')! : true,
      withoutAnimation: false,
    },
    device: 'desktop',
    size: Cookies.get('size') || 'medium',
  }),
  actions: {
    toggleSideBar() {
      this.sidebar.opened = !this.sidebar.opened;
      this.sidebar.withoutAnimation = false;
      if (this.sidebar.opened) {
        Cookies.set('sidebarStatus', '1');
      } else {
        Cookies.set('sidebarStatus', '0');
      }
    },
    closeSidebar(withoutAnimation: boolean) {
      Cookies.set('sidebarStatus', '0');
      this.sidebar.opened = false;
      this.sidebar.withoutAnimation = withoutAnimation;
    },
    toggleDevice(device: 'desktop' | 'mobile') {
      this.device = device;
    },
    setSize(size: string) {
      this.size = size;
      Cookies.set('size', size);
    },
  },
});
