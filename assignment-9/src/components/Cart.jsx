import React, { useState } from "react";
import { useItemStore } from "../store/useItemStore";
function Cart() {
  const { items, addItem } = useItemStore();
  const [newName, setNewName] = useState("");
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        My One Piece Characters
      </h2>
      <ul className="mb-4 space-y-2">
        {items.map((item) => (
          <li key={item.id} className="p-2 bg-gray-100 rounded shadow">
            {item.name}
          </li>
        ))}
      </ul>
      <div className="flex space-x-2">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Add item"
          className="p-2 border rounded w-full"
        />
        <button
          onClick={() => {
            if (newName.trim()) {
              addItem(newName);
              setNewName("");
            }
          }}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Cart;
