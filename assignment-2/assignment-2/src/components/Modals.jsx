import { useState } from "react";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    closeModal(); // close after submit
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={openModal}
        className=" rounded-2xl px-4 py-2 bg-blue-600 text-white  hover:bg-blue-700 transition"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Fill the Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-2xl hover:bg-green-700 transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600 transition"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
