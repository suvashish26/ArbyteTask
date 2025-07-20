import { useFakeQuery } from "../hooks/useFakeQuery";

function FakeQueryExample() {
  const { data, isLoading, isError, error } = useFakeQuery();

  if (isLoading)
    return (
      <p className="text-center text-blue-500 text-lg font-medium mt-4">
        Loading...
      </p>
    );

  if (isError)
    return (
      <p className="text-center text-red-500 text-lg font-medium mt-4">
        Error: {error.message}
      </p>
    );

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">My Superheroes</h2>
      <ul className="space-y-2">
        {data.map((item) => (
          <li
            key={item.id}
            className="p-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FakeQueryExample;
