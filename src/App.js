import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appoinment/Appointment';
import AuthProvider from './Pages/Context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
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
            <Route exact path='/appointment'>
              <Appointment></Appointment>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
