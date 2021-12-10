import Home from "./components/Home/Home";
import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { theme } from "./theme";

export const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">{code ? <Home code={code} /> : <LoginPage />}</div>
    </ThemeProvider>
  );
}

export default App;
