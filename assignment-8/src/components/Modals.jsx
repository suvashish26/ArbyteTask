import React from "react";
import { useModalContext } from "../context/Modals/ModalContext";
import Form from "./Form";

function Modals() {
  const { showModal, setShowModal } = useModalContext();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Modal Overlay & Content */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <Form />
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setShowModal(!showModal)}
        className="z-50 bg-indigo-600 text-white px-6 py-3 rounded shadow-md hover:bg-indigo-700 transition"
      >
        {showModal ? "Hide Modal" : "Show Modal"}
      </button>
    </div>
  );
}

export default Modals;
