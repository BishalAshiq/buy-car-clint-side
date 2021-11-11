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
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <PrivateRoute path="/aboutUs">
              <AboutUs></AboutUs>
          </PrivateRoute>
          <Route path="/login">
              <Login></Login>
          </Route>
          <Route path="/register">
              <Register></Register>
          </Route>
        </Switch>
        <Router path="/footer">
          <Footer></Footer>
        </Router>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
