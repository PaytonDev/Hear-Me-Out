import HomeContainer from './components/HomePage/HomeContainer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';


function App() {
  
  const code = new URLSearchParams(window.location.search).get('code')

  const storeCode = () => {
      if (code) {
      window.localStorage.setItem('yourCode', `${code}`)
      let yourCode = localStorage.getItem('yourCode')
      return yourCode
    }
    return
  }
  

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {storeCode() ? <HomeContainer code={code}/> : <LoginPage />}
          </Route>
          <Route path='/home'>
          <HomeContainer code={code}/> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
