import React, { useState, useEffect } from "react";
import { useFakeStore } from "../store/useFakeStore";

function ZustandExample() {
  const { items, addItem, deleteItem, error, loading, clearError } =
    useFakeStore();
  const [newName, setNewName] = useState("");

  const handleAdd = () => {
    if (!newName.trim()) return;
    addItem(newName);
    setNewName("");
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => clearError(), 3000);
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Fruit List (Zustand)
      </h2>

      <ul className="space-y-2 mb-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-2 bg-gray-100 rounded shadow-sm"
          >
            {item.name}
            <button
              className="text-red-500 hover:underline"
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter item name"
          className="border rounded px-2 py-1 w-full"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
          disabled={loading}
        >
          Add
        </button>
      </div>

      {loading && <p className="text-blue-500 mt-2">Updating...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default ZustandExample;
