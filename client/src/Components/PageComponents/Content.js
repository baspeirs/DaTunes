import React from "react";
import '../Styles/Content.css';
import ContentRow from "../Tools/ContentRow";

function Content() {
    return(
        <div id="mainContent">
            <ContentRow rowType={"album"} />
            <ContentRow rowType={"artist"} />
        </div>
    )
}

export default Content;