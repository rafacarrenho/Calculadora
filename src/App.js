import { ThemeProvider } from "styled-components";
import Calculator from "./components/Calculator";
import GlobalStyles from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";
import ThemeController from "./components/ThemeController";
import { useState } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState(false);

  const changeTheme = (state) => {
    setCurrentTheme(state);
  };
  return (
    <ThemeProvider theme={currentTheme ? darkTheme : lightTheme}>
      <Calculator />
      <ThemeController currentTheme={currentTheme} changeTheme={changeTheme} />

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
