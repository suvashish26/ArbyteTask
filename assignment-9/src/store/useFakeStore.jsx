import { create } from "zustand";

export const useFakeStore = create((set, get) => ({
  items: [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ],
  error: null,
  loading: false,

  addItem: (name) => {
    const newItem = { id: Date.now(), name };

    // Optimistically add item
    set((state) => ({
      items: [...state.items, newItem],
      loading: true,
      error: null,
    }));

    // Simulate API delay and success/failure
    setTimeout(() => {
      if (Math.random() < 0.8) {
        // success
        set({ loading: false });
      } else {
        // failure — rollback
        set((state) => ({
          items: state.items.filter((item) => item.id !== newItem.id),
          error: "Failed to add item",
          loading: false,
        }));
      }
    }, 1000);
  },

  deleteItem: (id) => {
    const prevItems = get().items;

    // Optimistically remove item
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
      loading: true,
      error: null,
    }));

    // Simulate delay and random failure
    setTimeout(() => {
      if (Math.random() < 0.8) {
        // success
        set({ loading: false });
      } else {
        // failure — rollback
        set({
          items: prevItems,
          error: "Failed to delete item",
          loading: false,
        });
      }
    }, 1000);
  },

  clearError: () => set({ error: null }),
}));
