import React from "react";
import '../Styles/NavItem.css';


function NavItem(props) {
    return(
        <div id="navItem">
            <img src={props.icon} id="headphonesIcon" alt={props.iconSrc}/>
            <p>{props.title}</p>
        </div>
    )
}

export default NavItem;