import { useState } from "react";

function SearchFilter() {
  const items = [
    "React",
    "JavaScript",
    "Python",
    "Node.js",
    "CSS Grid",
    "HTML",
    "Tailwind",
    "Django",
    "Express",
    "MongoDB",
  ];
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold text-center mb-3 text-gray-800">
        Tech Stack Search
      </h2>

      <input
        type="search"
        value={search}
        placeholder="Search technologies..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <ul className="space-y-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              className="px-3 py-2 bg-gray-50 rounded hover:bg-blue-50"
            >
              {item}
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">No results found</p>
        )}
      </ul>

      {filteredItems.length > 0 && (
        <p className="text-xs text-gray-500 mt-3">
          Showing {filteredItems.length} of {items.length} items
        </p>
      )}
    </div>
  );
}

export default SearchFilter;
