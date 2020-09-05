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

function Dashboard(props) {
    return (
        <div className="main-wrapper">
            <Pomodoro />
            <Player 
                item={props.item}
                is_playing={props.is_playing}
                progress_ms={props.progress_ms}
            />
            <ChatApp />
            <h1>this is a testas</h1>
        </div>
    )
}

export default Dashboard
