import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './Pages/Blog/Blog';
import AddAService from './Pages/Dropdown/AddaService/AddAService';
import Home from './Pages/Home/Home';
import NotFound from './Pages/Notfound/NotFound';
import Services from './Pages/Services/Services';
import SignIn from './Pages/SignIn/SignIn';
import Booking from './Pages/Booking/Booking';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MyBookings from './Pages/Dropdown/MyBookings/MyBookings';
import ManageBookings from './Pages/Dropdown/ManageBookings/ManageBookings';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <PrivateRoute path="/mybookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/managebookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute path="/addaservice">
              <AddAService></AddAService>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceKey">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
