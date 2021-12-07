import Home from "./components/Home/Home";
import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { theme } from "./theme";
import { useAppDispatch, useAppSelector } from "./app/hooks";

function App() {
  const song = useAppSelector((state) => state.musicPlayer.currentSong);

  const code = new URLSearchParams(window.location.search).get("code");

  const storeCode = () => {
    if (code) {
      window.localStorage.setItem("yourCode", `${code}`);
      let yourCode = localStorage.getItem("yourCode");
      return yourCode;
    }
    return;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">{storeCode() ? <Home code={code} /> : <LoginPage />}</div>
    </ThemeProvider>
  );
}

export default App;
