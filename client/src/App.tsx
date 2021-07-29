import HomeContainer from './components/HomePage/HomeContainer';
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
    
      <div className="App">
          {storeCode() ? <HomeContainer code={code}/> : <LoginPage />}  
      </div>
 
  );
}

export default App;
