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

function Dashboard({ item, is_playing, progress_ms }) {
    return (
        <div className="main-wrapper">
            <div className="dashboard-item">
                <Pomodoro />
            </div>
            <div className="dashboard-item">
                <Player
                    item={item}
                    is_playing={is_playing}
                    progress_ms={progress_ms}
                />
            </div>
            <div className="dashboard-item">
                <ChatApp item={item}/>
            </div>
        </div>
    )
}

export default Dashboard
