import { routes } from "./routes";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, theme } from "./themes";
import { useContext } from "react";
import { DarkModeContext } from "./contexts/DarkModeContext";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <CssBaseline />
      <RouterProvider router={routes} />;
    </ThemeProvider>
  );
};

export default App;
