import { useEffect } from "react";
import Home from "./components/Home/Home";
import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import useAuth from "./controller/useAuth";
import { useAppDispatch } from "./state/hooks";
import { setToken } from "./features/auth/auth-slice";
import { theme } from "./theme";

export const code = new URLSearchParams(window.location.search).get("code");

function App() {
  const token = useAuth(code);
  const dispatch = useAppDispatch();
  // const storeToken = useAppSelector((store) => store.auth.token);

  useEffect(() => {
    if (!token) return;
    dispatch(setToken(token));
  }, [token, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">{token ? <Home token={token} /> : <LoginPage />}</div>
    </ThemeProvider>
  );
}

export default App;
