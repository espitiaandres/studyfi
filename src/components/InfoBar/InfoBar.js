//
//  InfoBar.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import './InfoBar.css';

const InfoBar = ({ room, season }) => {
    let seasonStyling = season ? "seasonStyling" : "";
    // let seasonStylingAlt = season ? "seasonStylingAlt" : "";

    return (
        <div className={`infoBar ${seasonStyling}`}>
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online"/>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="https://www.andres-espitia.com/studyfi/#">
                    <img src={closeIcon} alt="close" />
                </a>
            </div>
        </div>
    )
}

export default InfoBar;
