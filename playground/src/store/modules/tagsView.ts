import { defineStore } from 'pinia';

interface ViewState {
  path: string;
  title?: string;
  meta: {
    title?: string;
    noCache?: boolean;
    affix?: boolean;
  };
  name?: string;
}

interface State {
  visitedViews: ViewState[];
  cachedViews: ViewState[];
}

export const viewsStore = defineStore('views', {
  state: (): State => ({
    visitedViews: [],
    cachedViews: [],
  }),
  getters: {
    visitedPaths(): string[] {
      return this.visitedViews.map((view) => view.path);
    },
    cachedViewsNames(): (string | undefined)[] {
      return this.cachedViews.map((view) => view.name);
    },
  },
  actions: {
    addVisitedView(view: ViewState) {
      if (!this.visitedPaths.includes(view.path)) {
        this.visitedViews.push({ ...view, title: view.meta.title || 'no-name' });
      }
    },
    addCachedView(view: ViewState) {
      if (view.name && !this.cachedViewsNames.includes(view.name)) {
        if (!view.meta.noCache) {
          this.cachedViews.push(view);
        }
      }
    },
    delVisitedView(viewPathParam: string) {
      this.visitedViews = this.visitedViews.filter((view) => view.path !== viewPathParam);
    },
    delCachedView(viewNameParam: string) {
      this.cachedViews = this.cachedViews.filter((view) => view.name !== viewNameParam);
    },
    delOthersVisitedViews(viewPathParam: string) {
      this.visitedViews = this.visitedViews.filter((view) => view.meta.affix || view.path === viewPathParam);
    },
    delOthersCachedViews(viewNameParam: string) {
      const index = this.cachedViewsNames.indexOf(viewNameParam);
      if (index > -1) {
        this.cachedViews = this.cachedViews.slice(index, index + 1);
      } else {
        this.cachedViews = [];
      }
    },
    delAllVisitedViews(affix = false) {
      this.visitedViews = affix ? this.visitedViews.filter((view) => view.meta.affix) : [];
    },
    delAllCachedViews() {
      this.cachedViews = [];
    },
    updateVisitedView(view: ViewState) {
      const index = this.visitedPaths.indexOf(view.path);
      if (index > -1) {
        this.visitedViews[index] = Object.assign(this.visitedViews[index], view);
      }
    },
  },
});
