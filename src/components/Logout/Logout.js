import useAuth from "../../hooks/useAuth";
import React from "react";

function Logout() {
    const {setAuth} = useAuth();
    const handleOnClick = () => {
        setAuth({});
        localStorage.clear();
    }
    return  (
        <button type="button" onClick={handleOnClick} className='button-icon button-icon--logout'>
            <span className='visually-hidden'>Exit</span>
        </button>
    )
}

export default Logout;