import { Route } from 'react-router-dom';

import AddTask from '../components/add-task';
import Tasks from '../components/tasks';
import { Box, Container, Typography, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          sx={{ gap: 3 }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Todo App
          </Typography>
          <Route
            path="/"
            exact
            component={() => (
              <>
                <AddTask />
                <Tasks />
              </>
            )}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default App;
