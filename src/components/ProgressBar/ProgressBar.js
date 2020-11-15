//
//  ProgressBar.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import moment from 'moment';
import './ProgressBar.css';

const ProgressBar = ({ songCurrentTime, songDuration, seasonStylingAlt }) => {
    const songCurrentTimeMinutesSeconds = moment(songCurrentTime).format("mm:ss");
    const songDurationMinutesSeconds = moment(songDuration).format("mm:ss");

    return (
        <div className="durationMenu">
            <p className="durationMenuTimes">{songCurrentTimeMinutesSeconds}</p>
                <div className="progress">
                    <div className={`progressBar ${seasonStylingAlt}`} style={{
                        width: (songCurrentTime * 100 / songDuration) + '%'
                    }} />
                </div>    
            <p className="durationMenuTimes">{songDurationMinutesSeconds}</p>
        </div>
    )
}

export default ProgressBar;
