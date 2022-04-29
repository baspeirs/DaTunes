import React from "react";
import '../Styles/AlbumCard.css';
import Image from '../../Images/KGLW-MindFuzz.jpg'


function AlbumCard() {
    return(
        <div id="albumCard">
            {/* image src and text will be passed through props. this component should be 100% re-useable */}
            <img src={Image} id="albumCover" alt="Placehoder - King Gizzard and the Lizzard Wizard album"/>
            <h4>I'm In Your Mind Fuzz</h4>
            <p>King Gizzard and the Lizzard Wizard</p>
        </div>
    )
}

export default AlbumCard;