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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Books & Movies</h2>

      <select
        onChange={(e) => setGenre(e.target.value)}
        value={genre}
        className="p-2 border rounded mb-4"
      >
        {genres.map((g, i) => (
          <option key={i} className="p-2">
            {g}
          </option>
        ))}
      </select>

      <ul className="list-disc pl-5">
        {displayed.map((item, i) => (
          <li key={i} className="mb-2">
            <strong className="text-lg">{item.title}</strong> by {item.author} (
            {item.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
