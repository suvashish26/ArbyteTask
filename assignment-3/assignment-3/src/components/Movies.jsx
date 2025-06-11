import React from "react";

function Movies() {
  const mediaList = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "The Shawshank Redemption", author: "Frank Darabont" },
    { title: "1984", author: "George Orwell" },
    { title: "The Godfather", author: "Francis Ford Coppola" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
  ];
  return (
    <div>
      {mediaList.map((item, index) => (
        <li key={index}>
          <p>
            <strong>Title:</strong> {item.title}
          </p>
          <p>
            <strong>Author/Director:</strong> {item.author}
          </p>
        </li>
      ))}
    </div>
  );
}

export default Movies;
