import React from "react";
import '../Styles/Sidebar.css';
import NavItem from '../Tools/NavItem'
import Icon from '../../Images/sound-waves.png';

function Sidebar() {
    return(
        <div id="sidebar">
            <NavItem 
                title={"Search"}
                icon={Icon}
                iconSrc={"Music icons created by Freepik - Flaticon"}
            />
            <NavItem 
                title={"Library"}
                icon={Icon}
                iconSrc={"Music icons created by Freepik - Flaticon"}
            />
            <NavItem 
                title={"Home"}
                icon={Icon}
                iconSrc={"Music icons created by Freepik - Flaticon"}
            />
        </div>
    )
}

export default Sidebar;