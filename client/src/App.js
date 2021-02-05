import logo from './logo.svg';
import './App.css';
import { Redirect, Router } from "@reach/router"
import NavBar from "./components/NavBar";
import MainPage from "./views/MainPage";
import NotFound from "./views/NotFound";
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Redirect from="/" to="/main" noThrow="true" />
        <MainPage path="/main"/>
        <NotFound default />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
