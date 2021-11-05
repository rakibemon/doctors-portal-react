import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appoinment/Appointment';
import AuthProvider from './Pages/Context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation/>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/reg'>
              <Register></Register>
            </Route>
            <PrivateRoute exact path='/appointment'>
              <Appointment></Appointment>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
