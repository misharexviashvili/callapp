import { create } from "zustand";

const useStore = create((set) => ({
  users: [],
  saveData: (data) =>
    set((state) => {
      console.log(data);
      return { users: [...state.users, data] };
    }),
}));

export default useStore;
