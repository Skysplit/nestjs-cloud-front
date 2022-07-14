import { Auth } from "./Auth";
import { TodoList } from "./TodoList";
import { UserProvider } from "./UserProvider";
import { QueryClientProvider, QueryClient } from "react-query";
import { TenantSelector } from "./TenantSelector";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <TenantSelector>
      {({ tenant }) => (
        <QueryClientProvider client={client}>
          <UserProvider>
            {({ user }) =>
              user === null ? <Auth /> : <TodoList tenant={tenant} />
            }
          </UserProvider>
        </QueryClientProvider>
      )}
    </TenantSelector>
  );
}

export default App;
