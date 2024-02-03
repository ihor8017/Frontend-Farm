import useAuth from "../../hooks/useAuth";
import React from "react";

function Logout() {
    const {setAuth} = useAuth();
    const handleOnClick = () => {
        setAuth({});
        const token = '';
        localStorage.setItem('token', token);
    }
    return  (
        <button type="button" onClick={handleOnClick}>Logout</button>
    )
}

export default Logout;