import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import EmailVerification from './components/SignUp/EmailVerification';
import Login from './components/Login/Login';
import  Registration  from './components/SignUp/SignUp';
import Bayer from './components/Dashboard/Bayer';
import Home from './pages/Home';
import Main from './pages/Main';
import Missing from './pages/Missing';
import Layout from './components/Layout/layout';
import RequireAuth from './services/RequireAuth';
import Unauthorized from './components/Unauthorized/Unauthorized';



const ROLES = {
  Bayer: '0',
  Seller: '1',
  Farmer: '2',
}

function App() {

  return ( 
          <Routes>
            <Route path='/' element={<Layout />} >
              {/* {public routes} */}
              <Route path="/main" element={<Main />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path ="/unauthorized" element={<Unauthorized />} />
              
                    {/* {protected routes} */}
                  <Route element={<RequireAuth allowedRoles={[ROLES.Bayer]} />}>
                    <Route path="/bayer" element={<Bayer />} />
                  </Route>

                  {/* <Route element={<RequireAuth allowedRoles={[ROLES.Farmer]} />}>
                    <Route path="/farmer" element={<Farmer />} />
                  </Route>

                  <Route element={<RequireAuth allowedRoles={[ROLES.Seller]} />}>
                    <Route path="/seller" element={<Seller />} />
                  </Route> */}
             
              <Route path={`/ConfirmEmail/:token`} element={<EmailVerification/>} />
              {/* Other routes */}
              <Route path="*" element={<Missing />} />
              </Route>
          </Routes>
         )
}

export default App;
