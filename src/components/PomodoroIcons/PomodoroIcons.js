//
//  PomodoroIcons.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { connect, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PomodoroIcons.css';

const PomodoroIcons = ({ minutesLeft, secondsLeft }) => {
    const season = useSelector(state => state.season);
    const seasonStyling = season ? "seasonStyling" : "";
    const seasonStylingAlt = season ? "seasonStylingAlt" : "";

    return (
        <div>
            <div className="pomodoroHeaderTitle">
                <div className={`iconsSpacing ${seasonStyling}Icons`}>
                    <FontAwesomeIcon icon={["fas", "pizza-slice"]} />
                </div>
                <div className={`iconsSpacing ${seasonStylingAlt}Icons`}>
                    <FontAwesomeIcon icon={["fas", "utensils"]} />
                </div>
                <h1 className="pomodoroHeaderTitleText">pomodoro</h1>
                <div className={`iconsSpacing ${seasonStylingAlt}Icons`}>
                    <FontAwesomeIcon icon={["fas", "utensils"]} />
                </div>
                <div className={`iconsSpacing ${seasonStyling}Icons`}>
                    <FontAwesomeIcon icon={["fas", "pizza-slice"]} />
                </div>
            </div>
            <div className="pomodoroHeaderTimer">
                <div className={`iconsSpacing ${seasonStyling}Icons`}>
                    <FontAwesomeIcon icon={["fas", "clock"]} />
                </div>
                <div className={`countdown ${seasonStyling}AltIcons`}>
                    {minutesLeft}:{secondsLeft}
                </div>
                <div className={`iconsSpacing ${seasonStyling}Icons`}>
                    <FontAwesomeIcon icon={["fas", "clock"]} />
                </div>
            </div>
        </div>
    )
}

export default connect()(PomodoroIcons);
