import React, { useState } from "react";
import { useNewStore } from "../store/useNewStore";

function ItemList() {
  const {
    setFilter,
    toggleItem,
    addItem,
    getFilteredItems,
    getItemCounts,
    filter,
  } = useNewStore();

  const items = getFilteredItems();
  const { total, completed, active } = getItemCounts();

  const [newItem, setNewItem] = useState("");

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white rounded shadow space-y-4">
      <h1 className="text-2xl font-bold">Todo List</h1>

      <div className="flex gap-2">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="border px-2 py-1 flex-1 rounded"
          placeholder="Add item..."
        />
        <button
          onClick={() => {
            if (newItem.trim()) {
              addItem(newItem);
              setNewItem("");
            }
          }}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <span>Total: {total}</span>
        <span>Active: {active}</span>
        <span>Completed: {completed}</span>
      </div>

      <div className="flex gap-2">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${
              filter === f
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`p-2 border rounded cursor-pointer ${
              item.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
