import useAuth from "../../hooks/useAuth";
import React from "react";

function Logout() {
    const {setAuth} = useAuth();
    const handleOnClick = () => {
        setAuth({});
        localStorage.clear();
    }
    return  (
        <button type="button" onClick={handleOnClick}>Logout</button>
    )
}

export default Logout;