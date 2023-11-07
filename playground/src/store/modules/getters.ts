import { defineStore } from 'pinia';

const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: '',
    avatar: '',
    name: '',
    introduction: '',
    roles: [],
  }),
  getters: {
    token: (state) => state.token,
    avatar: (state) => state.avatar,
    name: (state) => state.name,
    introduction: (state) => state.introduction,
    roles: (state) => state.roles,
  },
});

const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    sidebar: '',
    size: '',
    device: '',
  }),
  getters: {
    sidebar: (state) => state.sidebar,
    size: (state) => state.size,
    device: (state) => state.device,
  },
});

const useTagsViewStore = defineStore({
  id: 'tagsView',
  state: () => ({
    visitedViews: '',
    cachedViews: '',
  }),
  getters: {
    visitedViews: (state) => state.visitedViews,
    cachedViews: (state) => state.cachedViews,
  },
});

const usePermissionStore = defineStore({
  id: 'permission',
  state: () => ({
    permission_routes: [],
  }),
  getters: {
    permission_routes: (state) => state.permission_routes,
  },
});

const useErrorLogStore = defineStore({
  id: 'errorLog',
  state: () => ({
    errorLogs: '',
  }),
  getters: {
    errorLogs: (state) => state.errorLogs,
  },
});

export { useUserStore, useAppStore, useTagsViewStore, usePermissionStore, useErrorLogStore };
