import useFormField from "./useFormField";
export default function Contact() {
  const nameField = useFormField("", (v) => (v ? "" : "Name is required"));
  const emailField = useFormField("", (v) => {
    if (!v) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(v) ? "" : "Invalid email";
  });
  const messageField = useFormField("", (v) =>
    v ? "" : "Message is required"
  );

  function addValidation(e) {
    e.preventDefault();
    nameField.setTouched(true);
    emailField.setTouched(true);
    messageField.setTouched(true);

    if (!nameField.error && !emailField.error && !messageField.error) {
      // Submit logic here
      nameField.setValue("");
      emailField.setValue("");
      messageField.setValue("");
      nameField.setTouched(false);
      emailField.setTouched(false);
      messageField.setTouched(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Contact Us
        </h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              {...nameField}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
            {nameField.error && (
              <p className="text-red-500 text-xs mt-1">{nameField.error}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              {...emailField}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
            {emailField.error && (
              <p className="text-red-500 text-xs mt-1">{emailField.error}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-gray-700 font-medium">
              Message
            </label>
            <textarea
              {...messageField}
              rows={5}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Enter your message"
            />
            {messageField.error && (
              <p className="text-red-500 text-xs mt-1">{messageField.error}</p>
            )}
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
