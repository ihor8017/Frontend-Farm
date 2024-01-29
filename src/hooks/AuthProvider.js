import { createContext, useState} from 'react';
import React from 'react';


const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
// function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token' || ''));
//   const navigate = useNavigate();
//   const loginAction = (data) => {
//     console.log('data', data);
//     setUser(data.user);
//   };

//   const LogOut = (data) => {
//     data.logOut();
//     setUser(null);
//     setToken('');

//     navigate('/login');
//   };

//   return (
//     <AuthContext.Provider value={{ token, user, loginAction, LogOut }}>
//       {children}
//     </AuthContext.Provider>
//   );

// }

export default AuthContext;
// export default AuthProvider;

// export const useAuth = () => useContext(AuthContext);
