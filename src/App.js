import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
     <Router>
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
       </Switch>
     </Router>
    </div>
  );
}

export default App;
