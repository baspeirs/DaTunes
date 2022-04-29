import React from "react";
import AlbumCard from "../Tools/AlbumCard";
import '../Styles/Content.css';

function Content() {
    return(
        <div id="mainContent">
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
        </div>
    )
}

export default Content;