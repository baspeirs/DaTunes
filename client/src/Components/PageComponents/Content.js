import React from "react";
import AlbumCard from "../Tools/AlbumCard";
import '../Styles/Content.css';
import Image from '../../Images/KGLW-MindFuzz.jpg'

function Content() {
    return(
        <div id="mainContent">
            <AlbumCard 
                album={"I'm In Your Mind Fuzz"}
                artist={"King Gizzard and the Lizard Wizard"}
                imgSrc={Image}
                imgAlt={"Album Cover for King Gizzard and the Lizard Wizard - I'm In Your Mind Fuzz"}
            />
            <AlbumCard 
                album={"I'm In Your Mind Fuzz"}
                artist={"King Gizzard and the Lizard Wizard"}
                imgSrc={Image}
                imgAlt={"Album Cover for King Gizzard and the Lizard Wizard - I'm In Your Mind Fuzz"}
            />
            <AlbumCard 
                album={"I'm In Your Mind Fuzz"}
                artist={"King Gizzard and the Lizard Wizard"}
                imgSrc={Image}
                imgAlt={"Album Cover for King Gizzard and the Lizard Wizard - I'm In Your Mind Fuzz"}
            />
            <AlbumCard 
                album={"I'm In Your Mind Fuzz"}
                artist={"King Gizzard and the Lizard Wizard"}
                imgSrc={Image}
                imgAlt={"Album Cover for King Gizzard and the Lizard Wizard - I'm In Your Mind Fuzz"}
            />
        </div>
    )
}

export default Content;