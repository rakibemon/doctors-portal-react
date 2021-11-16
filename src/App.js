import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appoinment/Appointment';
import AuthProvider from './Pages/Context/AuthProvider';
import DashBoard from './../src/Pages/Dashboard/DashBoard/DashBoard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import Payment from './Pages/Dashboard/Payment/Payment';
import DashBoardHome from './Pages/Dashboard/DashBoardHome/DashBoardHome';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/reg' element={<Register />} />
            <Route path='/appointment' element={
              <PrivateRoute>
                <Appointment />
              </PrivateRoute>}>
            </Route>

            <Route path='/dashboard/*' element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>}>

              <Route path='*' element={<DashBoardHome />}>
              </Route>

              <Route path='payment/:appointmentId' element={<Payment />}>
              </Route>

              <Route path='makeAdmin' element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>}>
              </Route>

              <Route path='addDoctor'
                element={
                  <AdminRoute>
                    <AddDoctor />
                  </AdminRoute>}>
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
