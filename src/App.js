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
import Booking from './Pages/Booking/Booking';
import AddService from './Pages/AddService/AddService';
import NotFound from './Pages/NotFound/NotFound';
import ManageServices from './Pages/ManageServices/ManageServices';
import BookingModal from './Pages/BookingModal/BookingModal';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

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
          <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/bookingModal/:serviceId">
              <BookingModal></BookingModal>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
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
