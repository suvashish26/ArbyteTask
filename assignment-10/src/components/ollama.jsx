import React, { useState } from "react";

export const Ollama = () => {
  // State to store the prompt and the response data
  const [prompt, setPrompt] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle the submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // POST request to Ollama server with the prompt
    fetch("http://127.0.0.1:11434", {
      method: "POST", // We are sending a POST request
      headers: {
        "Content-Type": "application/json", // Specify that we're sending JSON
      },
      body: JSON.stringify({ prompt }), // Send the prompt as a JSON object
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Assuming the response is JSON
      })
      .then((data) => setResponseData(data)) // Store the response in state
      .catch((error) => setError(error.message)); // Handle errors
  };

  return (
    <div>
      <h1>Send Prompt to Ollama</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)} // Update prompt as user types
          placeholder="Enter your prompt here..."
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Submit Prompt</button>
      </form>

      {error && <p>Error: {error}</p>}
      {responseData ? (
        <div>
          <h3>Response from Ollama:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      ) : (
        <p>No response yet.</p>
      )}
    </div>
  );
};
