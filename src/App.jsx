import { routes } from "./routes";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./themes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />;
    </ThemeProvider>
  );
};

export default App;
