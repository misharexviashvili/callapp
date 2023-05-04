import { create } from "zustand";

const useStore = create((set) => ({
  users: [],
  saveData: (data) =>
    set((state) => {
      console.log(data);
      return { users: [...state.users, data] };
    }),
//   deleteUser: (id) =>
//     set((state) => {
//       state.users.filter((item) => item.id !== parseInt(id));
//     }),
}));

export default useStore;
