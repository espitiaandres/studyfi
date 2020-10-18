//
//  TopSongsDescriptions.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import ReactTooltip from "react-tooltip";
import './TopSongsDescriptions.css';
import { 
    trackPopularityDesc,
    acousticnessDesc,
    danceabilityDesc,
    energyDesc,
    keySignatureDesc,
    instrumentalnessDesc,
    valenceDesc
} from '../../utils/TopTracksDefinitions';

const TopSongsDescriptions = ({ season }) => {
    let seasonStyling = season ? "seasonStyling" : "";
    let seasonStylingAlt = season ? "seasonStylingAlt" : "";

    return (
        <div className="columnDescriptions">
            <ReactTooltip className="tooltips" id="acousticness" type="light" effect="solid" place="top">
                <span>{acousticnessDesc}</span>
            </ReactTooltip>
            <button className={`tooltip ${seasonStyling}`} data-tip data-for="acousticness">
                acousticness
            </button>

            <ReactTooltip className="tooltips" id="popularity" type="light" effect="solid" place="top">
                <span>{trackPopularityDesc}</span>
            </ReactTooltip>
            <button className={`tooltip ${seasonStyling}`} data-tip data-for="popularity">
                popularity
            </button>

            <ReactTooltip className="tooltips" id="danceability" type="light" effect="solid" place="top">
                <span>{danceabilityDesc}</span>
            </ReactTooltip>
            <button className={`tooltip ${seasonStylingAlt}`} data-tip data-for="danceability">
                danceability
            </button>

            <ReactTooltip className="tooltips" id="energy" type="light" effect="solid" place="top">
                <span>{energyDesc}</span>
            </ReactTooltip>
            <button className={`tooltip ${seasonStyling}`} data-tip data-for="energy">
                energy
            </button>

            <ReactTooltip className="tooltips" id="keysignature" type="light" effect="solid" place="top">
                <span>{keySignatureDesc}</span>
            </ReactTooltip>
            <button className={`tooltip ${seasonStyling}`} data-tip data-for="keysignature">
                key signature
            </button>

            <ReactTooltip className="tooltips" id="instrumentalness" type="light" effect="solid" place="top">
                <span>{instrumentalnessDesc}</span>
            </ReactTooltip>
            <button className={`tooltip ${seasonStylingAlt}`} data-tip data-for="instrumentalness">
                instrumentalness
            </button>

            <ReactTooltip className="tooltips" id="valence" type="light" effect="solid" place="top">
                <span>{valenceDesc}</span>
            </ReactTooltip>
            <button className={`tooltip ${seasonStyling}`} data-tip data-for="valence">
                valence
            </button>
        </div>
    )
}

export default TopSongsDescriptions;
