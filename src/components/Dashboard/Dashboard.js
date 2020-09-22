//
//  Dashboard.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import Player from '../Player/Player';
import Pomodoro from '../Pomodoro/Pomodoro';
import ChatApp from '../ChatApp/ChatApp';
import './Dashboard.css';

function Dashboard({ item, isPlaying, progressms }) {
    return (
        <div className="main-wrapper">
            <div className="dashboard-item">
                <Pomodoro />
            </div>
            <div className="dashboard-item">
                <Player
                    item={item}
                    isPlaying={isPlaying}
                    progressms={progressms}
                />
            </div>
            <div className="dashboard-item">
                <ChatApp item={item}/>
            </div>
        </div>
    )
}

export default Dashboard
