import React from "react";
import '../Styles/ArtistCard.css';



function ArtistCard(props) {
    return(
        <div id="artistCard">
            <img src={props.imgSrc} id="artistCover" alt={props.imgSrc}/>
            <h3>{props.artist}</h3>
        </div>
    )
}

export default ArtistCard;