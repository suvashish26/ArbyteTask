import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FakeQueryExample from "./components/FakeQueryExample";
import Cart from "./components/Cart";
import UpdatedCart from "./components/UpdatedCart";
import ItemList from "./components/ItemList";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FakeQueryExample />
        <Cart />
        <UpdatedCart />
        <ItemList />
      </QueryClientProvider>
    </>
  );
}

export default App;
