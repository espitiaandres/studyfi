//
//  Dashboard.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import Player from '../Player/Player';
import Pomodoro from '../Pomodoro/Pomodoro';
import ChatApp from '../ChatApp/ChatApp';
import TopSongs from '../TopSongs/TopSongs';
import './Dashboard.css';

function Dashboard({ item, isPlaying, progressms }) {
    const [season, setSeason] = useState(false); 

    return (
        <div className="overallDashboardWrapper">
            <div className="maindDashboardWrapper">
                <div className="dashboard-item">
                    <Pomodoro 
                        season={season}
                    />
                </div>
                <div className="dashboard-item">
                    <button className="seasonSelect" onClick={() => {setSeason(!season)}}>
                        Halloween mode!
                    </button>
                    <Player
                        item={item}
                        isPlaying={isPlaying}
                        progressms={progressms}
                        season={season}
                    />
                </div>
                <div className="dashboard-item">
                    <ChatApp 
                        item={item}
                        season={season}
                    />
                </div>
            </div>
            <div className="maindDashboardWrapper">
                <TopSongs 
                    season={season}
                />
            </div>            
        </div>
    )
}

export default Dashboard
