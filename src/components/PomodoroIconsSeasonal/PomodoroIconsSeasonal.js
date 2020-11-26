//
//  PomodoroIconsSeasonal.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { connect, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PomodoroIconsSeasonal.css';

const PomodoroIconsSeasonal = ({ minutesLeft, secondsLeft, seasonIconOuter, seasonIconInner, seasonIconTimer }) => {
    const season = useSelector(state => state.season);
    const seasonStyling = season ? "seasonStyling" : "";
    const seasonStylingAlt = season ? "seasonStylingAlt" : "";

    return (
        <div>
            <div className="pomodoroHeaderTitle">
                <div className={`iconsSpacing ${seasonStyling}Icons`}>
                    <FontAwesomeIcon icon={seasonIconOuter} />
                </div>
                <div className={`iconsSpacing ${seasonStylingAlt}Icons`}>
                    <FontAwesomeIcon icon={seasonIconInner} />
                </div>
                <h1 className="pomodoroHeaderTitleText">pomodorooooo</h1>
                <div className={`iconsSpacing ${seasonStylingAlt}Icons`}>
                    <FontAwesomeIcon icon={seasonIconInner} />
                </div>
                <div className={`iconsSpacing ${seasonStyling}Icons`}>
                    <FontAwesomeIcon icon={seasonIconOuter} />
                </div>
            </div>
            <div className="pomodoroHeaderTimer">
                <div className={`iconsSpacing ${seasonStyling}Icons`}>
                    <FontAwesomeIcon icon={seasonIconTimer} />
                </div>
                <div className={`countdown ${seasonStyling}AltIcons`}>
                    {minutesLeft}:{secondsLeft}
                </div>
                <div className={`iconsSpacing ${seasonStyling}Icons`}>
                    <FontAwesomeIcon icon={seasonIconTimer} />
                </div>
            </div>
        </div>
    )
}

export default connect()(PomodoroIconsSeasonal);
