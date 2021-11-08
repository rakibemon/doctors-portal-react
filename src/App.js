import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appoinment/Appointment';
import AuthProvider from './Pages/Context/AuthProvider';
import DashBoard from './../src/Pages/Dashboard/DashBoard/DashBoard';
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
          <Switch>
            <Route exact path='/'>
            <Navigation/>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
            <Navigation/>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
            <Navigation/>
              <Login></Login>
            </Route>
            <Route exact path='/reg'>
            <Navigation/>
              <Register></Register>
            </Route>
            <PrivateRoute exact path='/appointment'>
            <Navigation/>
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <DashBoard></DashBoard>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
