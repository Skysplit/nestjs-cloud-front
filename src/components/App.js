import { Auth } from "./Auth";
import { TodoList } from "./TodoList";
import { UserProvider } from "./UserProvider";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <UserProvider>
        {({ user }) => (user === null ? <Auth /> : <TodoList />)}
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
