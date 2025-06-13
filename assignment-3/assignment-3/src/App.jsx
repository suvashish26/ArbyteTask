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
      <h2>Books List</h2>
      <ListRenderer
        data={books}
        renderItem={(book) => (
          <>
            <strong>{book.title}</strong> by {book.author} ({book.genre})
          </>
        )}
      />
    </div>
  );
};

export default App;
