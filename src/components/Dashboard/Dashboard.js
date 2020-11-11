//
//  Dashboard.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Player from '../Player/Player';
import Pomodoro from '../Pomodoro/Pomodoro';
import ChatApp from '../ChatApp/ChatApp';
import TopSongs from '../TopSongs/TopSongs';
import PlaylistStats from '../PlaylistStats/PlaylistStats';
import './Dashboard.css';

const Dashboard = ({ item, isPlaying, progressms, shuffleState, repeatState, device, token }) => {
    const [season, setSeason] = useState(false);
    const [user, setUser] = useState('');
    const [userProfile, setUserProfile] = useState('');

    useEffect(() => {
        getCurrentUser();
    }, []);

    const getCurrentUser = () => {
        axios({
            method: 'get',
            url: `https://api.spotify.com/v1/me`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(({ data }) => {
            setUser(data.id);
            setUserProfile(data.external_urls.spotify);
        });
    }

    return (
        <div className="overallDashboardWrapper">
            <div className="mainDashboardWrapper">
                <div className="dashboardItem">
                    <Pomodoro 
                        user={user}
                        userProfile={userProfile}
                        season={season}
                    />
                </div>
                <div className="dashboardItem">
                    <button className="seasonSelect" onClick={() => {setSeason(!season)}}>
                        Christmas mode!
                    </button>
                    <Player
                        item={item}
                        isPlaying={isPlaying}
                        progressms={progressms}
                        shuffleState={shuffleState}
                        repeatState={repeatState}
                        season={season}
                        device={device}
                        token={token}
                    />
                </div>
                <div className="dashboardItem">
                    <ChatApp 
                        item={item}
                        user={user}
                        season={season}
                    />
                </div>
            </div>
            <div className="mainDashboardWrapper">
                <TopSongs 
                    season={season}
                    token={token}
                />
            </div>
            <div className="mainDashboardWrapper">
                <PlaylistStats 
                    user={user}
                    season={season}
                    token={token}
                />
            </div>       
        </div>
    )
}

export default Dashboard
