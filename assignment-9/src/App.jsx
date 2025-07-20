import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FakeQueryExample from "./components/FakeQueryExample";
import Cart from "./components/Cart";
import UpdatedCart from "./components/UpdatedCart";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FakeQueryExample />
        <Cart />
        <UpdatedCart />
      </QueryClientProvider>
    </>
  );
}

export default App;
