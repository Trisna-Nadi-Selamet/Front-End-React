// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Navbarlogo from './components/Navbarlogo';
import LeftNavbar from './components/LeftNavbar';
import Portfolio from './pages/Portfolio';
import Info from './pages/Info';
// import TemCard from './components/TemCard';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
      </div>
      <div className="App">
        <div className="container main-page">
          <div className="left-navbar">
            <Navbarlogo />
            <p className="text">Trisna Nadi Selamet </p>
            <hr />
            <LeftNavbar />
          </div>
          <div className="main-section">
            <div className="first-section">
              <Switch>
                <Route exact path="/">
                  <Home />
                  <Info />
                </Route>
                <Route path="/about">
                  <About />
                  <Portfolio />
                </Route>
                <Route path="/portfolio"></Route>

                {/*<Route path="/users">
            <User />
          </Route>
          <Route path="/settings">
            <Setting />
          </Route> */}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
