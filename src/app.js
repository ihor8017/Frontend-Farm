import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login} from './components/Login/Login';
import  Registration  from './components/SignUp/SignUp';
import {Dashboard} from './components/Dashboard/Dashboard';
import AuthProvider from './hooks/AuthProvider';
import PrivateRoute from './router/route';
import {observer} from 'mobx-react-lite';
import EmailVerification from './components/SignUp/EmailVerification';
import Home from './pages/Home';

function App() {


  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />}  />
            <Route path="/registration" element={<Registration />} />

            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            /* eslint-disable */
            <Route path={'/ConfirmEmail/:token'}  element={<EmailVerification/>} />
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default observer(App);
