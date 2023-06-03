import React from "react";
import Logo from '../images/logo.png'
import CustomButton from "./CustomButton";
const Navbar = () => {
    return ( 
            <div className="big-div">
                <div className="header container">
                <img src={Logo} />
                
                <p>Contact us</p>
            
                </div>
            <div className="nav">
            <div className="nav-overlay">
            <div className="nav-content">
                <h2>Start <span style={{ color: '#FF6600' }}>YOUR </span> digital </h2>
                <h2>transformation journey. </h2>
                <p>Discover the power of streamlined operations today!</p>
            </div>
                <div className="main-button">
                <div className="button-1">
            <CustomButton text="Talk to expert" type="PRIMARY" />
            </div>
            <div>
            <div className="button-2">
            <CustomButton text="Recent Jobs" type="SECONDARY" /> 
            </div>
            </div>
        </div>
            
     </div>
            
     </div>
</div>
     );
}
 
export default Navbar;