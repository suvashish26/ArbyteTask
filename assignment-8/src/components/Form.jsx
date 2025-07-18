import React from "react";

function Form() {
  return (
    <form className="space-y-4">
      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
