import React from "react";
import '../Styles/Sidebar.css';
import NavItem from '../Tools/NavItem'

function Sidebar() {
    return(
        <div id="sidebar">
            <NavItem />
            <NavItem />
            <NavItem />
        </div>
    )
}

export default Sidebar;