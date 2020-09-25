//
//  JoinForm.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone/builds/moment-timezone-with-data';
import './JoinForm.css';

const JoinForm = ({ season }) => {    
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [city, setCity] = useState('');
    const [tz, setTZ] = useState('');

    let seasonStyling = season ? "seasonStyling" : "";
    let seasonStylingAlt = season ? "seasonStylingAlt" : "";

    const onJoinFormSubmit = (e) => {
        e.preventDefault();
    }

    let timezones = [];

    for (let i = 12; i >= 1; i--) {
        timezones.push("GMT+" + i.toString());
    }

    timezones.push("GMT");

    for (let i = 1; i <= 11; i++) {
        timezones.push("GMT-" + i.toString());
    }

    return (
        <form onSubmit={onJoinFormSubmit}>
            <h1 className={`heading ${seasonStylingAlt}Header`}>chat</h1>
            <div>
                <input placeholder="name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <input placeholder="room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
            </div>
            <div>
                <input placeholder="city name" className="joinInput mt-20" type="text" onChange={(event) => setCity(event.target.value)} />
            </div>
            <div>
                <select onChange={(event) => setTZ(event.target.value)}>
                    {timezones.map(tz => <option>{tz}</option>)}
                </select>
            </div>
            <Link 
                onClick={e => (!name || !room || !city || !tz) ?  e.preventDefault() : null} 
                to={`/chat?name=${name}&room=${room}`}
            >
                <button className={`button mt-20 ${seasonStyling}`} type="submit">Sign In</button>
            </Link>
        </form>
    )
}

export default JoinForm
