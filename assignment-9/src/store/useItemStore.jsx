// store/useItemStore.js
import { create } from "zustand";

export const useItemStore = create((set) => ({
  items: [
    { id: 1, name: "Luffy" },
    { id: 2, name: "Zoro" },
    { id: 3, name: "Nami" },
  ],
  addItem: (name) =>
    set((state) => ({
      items: [...state.items, { id: Date.now(), name }],
    })),
}));
