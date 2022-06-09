import { Box, Typography } from "@mui/material";

export function Todo({ todo }) {
  return (
    <Box my={1} borderBottom={1}>
      <Typography variant="body1">{todo.name}</Typography>
      <Typography variant="caption">{todo.description}</Typography>
    </Box>
  );
}
