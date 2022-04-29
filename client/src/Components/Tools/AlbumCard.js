import React from "react";
import '../Styles/AlbumCard.css';



function AlbumCard(props) {
    return(
        <div id="albumCard">
            <img src={props.imgSrc} id="albumCover" alt={props.imgSrc}/>
            <h4>{props.album}</h4>
            <p>{props.artist}</p>
        </div>
    )
}

export default AlbumCard;