import React from "react";
import Sidebar from './Sidebar';
import Content from './Content';
import '../Styles/Body.css'

function Body() {

    return(
        <article id="body">
            <Sidebar />
            <Content />
        </article>
    )
}

export default Body