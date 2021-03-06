//
//  App.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from "react";
import axios from 'axios';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import hash from './utils/hash';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { startSetToken } from './actions/token';
import './App.css';

const App = (props) =>  {  let interval;
  const itemDefault = {
    album: { 
		images: [{ url: "" }]
    },
	name: "",
	artists: [{ name: "" }],
	duration_ms: 0
  };

  const [token, setToken] = useState(null);
  const [item, setItem] = useState(itemDefault);
  const [isPlaying, setIsPlaying] = useState("Paused");
  const [progressms, setProgressms] = useState(0);
  const [repeatState, setRepeatState] = useState();
  const [shuffleState, setShuffleState] = useState();
  const [device, setDevice] = useState();

  const [data, setData] =  useState(true);

  useEffect(() => {
    let token = hash.access_token;    
    const backendEndpoint = 'https://react-chat-app-back-end.herokuapp.com/';
    const socket = io(backendEndpoint, {transports: ['websocket']});

    socket.emit('join', { 
		name: '', 
		room: '', 
		tz: '' 
    }, () => {});
    socket.emit('disconnect');

    if (token) {
		setToken(token);
		getCurrentlyPlaying(token);
    }

    interval = setInterval(() => {
		tick(token);
    }, 1000);

    return () => {
      	clearInterval(interval);
    }
  }, [])

  const tick = (token) => {
	if(token) {
		getCurrentlyPlaying(token);
	}
  }

  const getCurrentlyPlaying = (token) => {
	axios({
		method: 'get',
		url: 'https://api.spotify.com/v1/me/player',
		headers: {
			'Authorization': `Bearer ${token}`
		}
	}).then(({ data }) => {
		if(!data) {
			setData(data);
			return;
		}

		setItem(data.item);
		setIsPlaying(data.is_playing);
		setProgressms(data.progress_ms);
		setShuffleState(data.shuffle_state);
		setRepeatState(data.repeat_state);
		setDevice(data.device.name);
		setData(true);
	});
  }

  props.startSetToken(token);

  return (
    <div className="App">
		{!token && <LandingPage />}
		{token && data && (
			<Dashboard
			item={item}
			isPlaying={isPlaying}
			progressms={progressms}
			shuffleState={shuffleState}
			repeatState={repeatState}
			device={device}
			/>
		)}
		{!data && <NotFoundPage />}  
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
	startSetToken: (token) => dispatch(startSetToken(token))
})

export default connect(undefined, mapDispatchToProps)(App);
