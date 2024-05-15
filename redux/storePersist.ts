export const storePersist = {
  set: (key: string, state: any) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(state));
    }
  },
  get: (key: string) => {
    if (typeof window !== "undefined") {
      const result: any = window.localStorage.getItem(key);
      return JSON.parse(result);
    }
  },
  remove: (key: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
  },
  getAll: () => {
    if (typeof window !== "undefined") {
      return window.localStorage;
    }
  },
  clear: () => {
    if (typeof window !== "undefined") {
      window.localStorage.clear();
    }
  },
};

export default storePersist;
