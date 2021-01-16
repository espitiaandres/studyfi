//
//  Dashboard.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, useSelector } from 'react-redux';
import Player from '../Player/Player';
import Pomodoro from '../Pomodoro/Pomodoro';
import ChatApp from '../ChatApp/ChatApp';
import TopSongs from '../TopSongs/TopSongs';
import PlaylistStats from '../PlaylistStats/PlaylistStats';
import { startSetSeason } from '../../actions/season';
import './Dashboard.css';

const Dashboard = (props) => {
    const { item, isPlaying, progressms, shuffleState, repeatState, device } = props;
    const [season, setSeason] = useState(false);
    const [user, setUser] = useState('');
    const [userProfile, setUserProfile] = useState('');

    const token = useSelector(state => state.token);

    const onSeasonSelect = () => {
        setSeason(!season);
        props.startSetSeason(season);        
    }

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
                    />
                </div>
                <div className="dashboardItem">
                    <button className="seasonSelect" onClick={onSeasonSelect}>
                        Valentines Day mode!
                    </button>
                    <Player
                        item={item}
                        isPlaying={isPlaying}
                        progressms={progressms}
                        shuffleState={shuffleState}
                        repeatState={repeatState}
                        device={device}
                    />
                </div>
                <div className="dashboardItem">
                    <ChatApp 
                        item={item}
                        user={user}
                    />
                </div>
            </div>
            <div className="mainDashboardWrapper">
                <TopSongs />
            </div>
            <div className="mainDashboardWrapper">
                <PlaylistStats user={user} />
            </div>       
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startSetSeason: (season) => dispatch(startSetSeason(!season))
})

export default connect(undefined, mapDispatchToProps)(Dashboard);
