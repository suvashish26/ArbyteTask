import React from "react";
import Form from "./components/Form";
import Movies from "./components/Movies";
// Generic reusable list component
const ListRenderer = ({ data, renderItem }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const books = [
    { title: "1984", author: "George Orwell", genre: "Dystopian" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
    { title: "The Godfather", author: "Francis Ford Coppola", genre: "Crime" },
  ];

  return (
    <div>
      <Form />
      <Movies />
      <div className="max-w-xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">
          Books List
        </h2>
        <ListRenderer
          data={books}
          renderItem={(book) => (
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <strong className="text-blue-800 text-lg">{book.title}</strong>
              <span className="text-gray-500 hidden sm:inline">by</span>
              <span className="font-medium text-purple-700">{book.author}</span>
              <span className="ml-auto px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs font-semibold">
                {book.genre}
              </span>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default App;
