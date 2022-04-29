import React from "react";
import '../Styles/ContentRow.css';
import AlbumCard from "../Tools/AlbumCard";
import ArtistCard from "../Tools/ArtistCard";
import Image from '../../Images/KGLW-MindFuzz.jpg'
import Artist from '../../Images/KGLW-Band.jpg'



function ContentRow(props) {
    if (props.rowType === "album") {
        return (
            <div className="contentRow">
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
    if (props.rowType === "artist") {
        return (
            <div className="contentRow">
                <ArtistCard
                    artist={"King Gizzard and the Lizard Wizard"}
                    imgSrc={Artist}
                    imgAlt={"Artist Cover for King Gizzard and the Lizard Wizard"}
                />
                <ArtistCard
                    artist={"King Gizzard and the Lizard Wizard"}
                    imgSrc={Artist}
                    imgAlt={"Artist Cover for King Gizzard and the Lizard Wizard"}
                />
                <ArtistCard
                    artist={"King Gizzard and the Lizard Wizard"}
                    imgSrc={Artist}
                    imgAlt={"Artist Cover for King Gizzard and the Lizard Wizard"}
                />
                <ArtistCard
                    artist={"King Gizzard and the Lizard Wizard"}
                    imgSrc={Artist}
                    imgAlt={"Artist Cover for King Gizzard and the Lizard Wizard"}
                />
            </div>
        )
    }
    if (props.rowType === "song") {
        return (
            <div className="contentRow">

            </div>
        )
    }
}

export default ContentRow;