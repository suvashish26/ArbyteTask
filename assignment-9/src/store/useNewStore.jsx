import { create } from "zustand";

export const useNewStore = create((set, get) => ({
  items: [
    { id: 1, name: "Buy Netflix Subscription", completed: false },
    { id: 2, name: "Read Zustand docs", completed: true },
    { id: 3, name: "Practice React", completed: false },
  ],
  filter: "all", // all | active | completed

  setFilter: (filter) => set({ filter }),

  toggleItem: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    })),

  addItem: (name) =>
    set((state) => ({
      items: [...state.items, { id: Date.now(), name, completed: false }],
    })),

  // Derived/computed state:
  getFilteredItems: () => {
    const { items, filter } = get();
    if (filter === "active") return items.filter((i) => !i.completed);
    if (filter === "completed") return items.filter((i) => i.completed);
    return items;
  },

  getItemCounts: () => {
    const { items } = get();
    return {
      total: items.length,
      completed: items.filter((i) => i.completed).length,
      active: items.filter((i) => !i.completed).length,
    };
  },
}));
