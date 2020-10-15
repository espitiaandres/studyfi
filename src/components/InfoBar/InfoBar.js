//
//  InfoBar.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import './InfoBar.css';

const InfoBar = ({ room, season, onDisconnect }) => {
    let seasonStyling = season ? "seasonStyling" : "";
    // let seasonStylingAlt = season ? "seasonStylingAlt" : "";

    return (
        <div className={`infoBar ${seasonStyling}`}>
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online"/>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <Link to="https://www.andres-espitia.com/studyfi/#">
                    <div onClick={onDisconnect}>
                        <img src={closeIcon} alt="close" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default InfoBar;
