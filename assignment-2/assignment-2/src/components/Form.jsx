import useInput from "./useInput";

function Form() {
  const nameInput = useInput("");
  const emailInput = useInput("");

  return (
    <div className="bg-amber-50 flex justify-center items-center min-h-screen">
      <form className="bg-white p-6 rounded-lg shadow-md w-[300px] space-y-4">
        <h1 className="text-center text-xl font-semibold text-gray-700">
          User Form
        </h1>

        <input
          type="text"
          placeholder="Name"
          {...nameInput}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <input
          type="email"
          placeholder="Email"
          {...emailInput}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-2xl hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
