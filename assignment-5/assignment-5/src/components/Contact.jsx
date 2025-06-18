import { useState } from "react";

export default function Contact() {
  const [isName, setName] = useState("");
  const [isEmail, setEmail] = useState("");
  const [isMessage, setMessage] = useState("");
  const [isError, setError] = useState("");

  function setNameValue(e) {
    setName(e.target.value);
  }
  function setEmailValue(e) {
    setEmail(e.target.value);
  }
  function setMessageValue(e) {
    setMessage(e.target.value);
  }
  function addValidation(e) {
    e.preventDefault();
    if (!isName || !isEmail || !isMessage) {
      setError("Please fill in all fields");
    } else {
      setError("");
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Contact Us
        </h2>
        {isError && (
          <p className="text-red-500 mb-4 text-center font-medium">{isError}</p>
        )}
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              value={isName}
              onChange={setNameValue}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              value={isEmail}
              onChange={setEmailValue}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-gray-700 font-medium">
              Message
            </label>
            <textarea
              value={isMessage}
              onChange={setMessageValue}
              placeholder="Enter your message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={addValidation}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded transition duration-200 shadow"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
