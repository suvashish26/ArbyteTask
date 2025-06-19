import React, { useState } from "react";

const Movies = () => {
  const [genre, setGenre] = useState("All");

  const items = [
    { title: "1984", author: "George Orwell", genre: "Dystopian" },
    { title: "The Godfather", author: "Francis Ford Coppola", genre: "Crime" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  ];

  const genres = ["All", ...new Set(items.map((item) => item.genre))];

  const displayed =
    genre === "All" ? items : items.filter((i) => i.genre === genre);

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Books & Movies
      </h2>

      <div className="flex justify-center mb-6">
        <select
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
          className="p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          {genres.map((g, i) => (
            <option key={i} className="p-2">
              {g}
            </option>
          ))}
        </select>
      </div>

      <ul className="list-none pl-0">
        {displayed.map((item, i) => (
          <li
            key={i}
            className="mb-4 bg-blue-50 rounded p-4 shadow-sm hover:bg-blue-100 transition"
          >
            <strong className="text-lg text-blue-800">{item.title}</strong>
            <span className="block text-gray-700">
              by <span className="font-medium">{item.author}</span>
            </span>
            <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-200 text-blue-800 rounded">
              {item.genre}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
