import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
     <Router>
       <Navigation></Navigation>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path="/aboutUs">
            <AboutUs></AboutUs>
         </Route>
         <Route path="/login">
            <Login></Login>
         </Route>
       </Switch>
       <Router path="/footer">
         <Footer></Footer>
       </Router>
     </Router>
    </div>
  );
}

export default App;
