import { Box, Container, CssBaseline, Stack } from "@mui/material";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <Box bgcolor="#f0f0f0" minHeight="100vh">
      <CssBaseline />
      <Stack direction="column" alignItems="center" spacing={2} sx={{ width: '100%' }}>
        <Header />
        <TodoList />
      </Stack>
    </Box>
  )
}
