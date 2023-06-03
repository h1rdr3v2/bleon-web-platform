import React from "react";
import Logo from '../images/logo.png'
const Navbar = () => {
    return ( 
        <div className="nav">
            <h2>Start YOUR digital transformation journey.</h2>
            <div className="header container">
                <img src={Logo} />
                <p>Cotact us</p>
            </div>
        </div>
     );
}
 
export default Navbar;