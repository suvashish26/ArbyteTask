import { useFakeQuery } from "../hooks/useFakeQuery";

function FakeQueryExample() {
  const { data, isLoading, isError, error } = useFakeQuery();
  if (isLoading) return <p>Loading..</p>;
  if (isError) return <p>Error..{error.message}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
export default FakeQueryExample;
