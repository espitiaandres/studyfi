//
//  TopArtistsDescriptions.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import ReactTooltip from "react-tooltip";
import './TopArtistsDescriptions.css';
import { 
    followersDesc,
    genreDesc,
    nameDesc,
    photoDesc,
    popularityDesc
} from '../../utils/tableFormat';

const TopArtistsDescriptions = ({ season }) => {
    let seasonStyling = season ? "seasonStyling" : "";
    let seasonStylingAlt = season ? "seasonStylingAlt" : "";

    return (
        <div className="columnDescriptions">
            <ReactTooltip className="tooltips" id="name" type="light" effect="solid" place="top">
                <span>{nameDesc}</span>
            </ReactTooltip>
            <button className={`tooltip ${seasonStyling}`} data-tip data-for="name">
                name
            </button>

            <ReactTooltip className="tooltips" id="followers" type="light" effect="solid" place="top">
                <span>{followersDesc}</span>
            </ReactTooltip>
            <button className={`tooltip ${seasonStylingAlt}`} data-tip data-for="followers">
                followers
            </button>

            <ReactTooltip className="tooltips" id="genre" type="light" effect="solid" place="top">
                <span>{genreDesc}</span>
            </ReactTooltip>
            <button className={`tooltip ${seasonStyling}`} data-tip data-for="genre">
                genres
            </button>

            <ReactTooltip className="tooltips" id="photo" type="light" effect="solid" place="top">
                <span>{photoDesc}</span>
            </ReactTooltip>
            <button className={`tooltip ${seasonStyling}`} data-tip data-for="photo">
                photo
            </button>

            <ReactTooltip className="tooltips" id="popularity" type="light" effect="solid" place="top">
                <span>{popularityDesc}</span>
            </ReactTooltip>
            <button className={`tooltip ${seasonStylingAlt}`} data-tip data-for="popularity">
                popularity
            </button>
        </div>
    )
}

export default TopArtistsDescriptions;
