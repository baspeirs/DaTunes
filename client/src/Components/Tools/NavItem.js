import React from "react";
import '../Styles/NavItem.css';
import headphones from '../../Images/sound-waves.png';


function NavItem() {
    return(
        <div id="navItem">
            {/* image src and text will be passed through props. this component should be 100% re-useable */}
            <img src={headphones} id="headphonesIcon" alt="Music icons created by Freepik - Flaticon"/>
            <p>I am on the side</p>
        </div>
    )
}

export default NavItem;