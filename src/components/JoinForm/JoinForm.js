//
//  JoinForm.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JoinForm.css';

const JoinForm = ({ season }) => {    
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    let seasonStyling = season ? "seasonStyling" : "";
    let seasonStylingAlt = season ? "seasonStylingAlt" : "";

    const onJoinFormSubmit = (e) => {
        e.preventDefault();
    }

    // console.log(season);

    return (
        <form onSubmit={onJoinFormSubmit}>
            <h1 className="heading">chat</h1>
            <div>
                <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
            </div>
            <Link 
                onClick={e => (!name || !room) ?  e.preventDefault() : null} 
                to={`/chat?name=${name}&room=${room}`}
            >
                <button className={`button mt-20 ${seasonStyling}`} type="submit">Sign In</button>
            </Link>
        </form>
    )
}

export default JoinForm
