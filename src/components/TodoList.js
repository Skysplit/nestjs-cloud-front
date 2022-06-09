import { Button, FormHelperText, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "react-query";
import { fetchTodos } from "../api/todo";
import { useUserContext } from "../hooks/useUserContext";
import { Todo } from "./Todo";

export function TodoList() {
  const { onLogout } = useUserContext();
  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ["todos"],
    fetchTodos
  );

  return (
    <Box>
      <Box my={2}>
        <Button variant="outlined" onClick={onLogout}>
          Logout
        </Button>
      </Box>
      <Box my={2}>
        {isLoading && <LinearProgress />}
        {isError && <FormHelperText error>{error.message}</FormHelperText>}
        {isSuccess && data.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </Box>
    </Box>
  );
}
