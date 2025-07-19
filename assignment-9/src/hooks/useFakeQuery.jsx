
import { useQuery } from "@tanstack/react-query";

const fetchFakeItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Superman" },
        { id: 2, name: "Batman" },
        { id: 3, name: "Deadpool" },
      ]);
    }, 2000);
  });
};

export function useFakeQuery() {
  return useQuery({
    queryKey: ["fakeItems"],
    queryFn: fetchFakeItems,
    staleTime: 1000 * 60,
  });
}
