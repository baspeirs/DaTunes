import React from "react";
import '../Styles/Sidebar.css';
import Header from '../PageComponents/Header';
import SidebarMain from "./SidebarMain";

function Sidebar() {
    return(
        <div id="sidebar">
            <Header />
            <SidebarMain />
        </div>
    )
}

export default Sidebar;