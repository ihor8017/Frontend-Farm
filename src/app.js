import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login} from './components/Login/Login';
import { Registration } from './components/SignUp/SignUp';
import {Dashboard} from './components/Dashboard/Dashboard';
import AuthProvider from './hooks/AuthProvider';
import PrivateRoute, { SuccessRoute } from './router/route';
import Success from './components/Success/Success';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<SuccessRoute />}>
              <Route path="/success" element={<Success />} />
            </Route>
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
