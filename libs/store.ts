import { create } from "zustand";

const useStore = create((set) => ({
  globalUsername: "",
  setUsername: (newUsername) => set(() => ({ globalUsername: newUsername })),
  removeUsername: () => set({ globalUsername: "" }),
}));

export default useStore;
