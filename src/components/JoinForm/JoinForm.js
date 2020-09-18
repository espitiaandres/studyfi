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

function JoinForm() {    
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div>
            <h1 className="heading">chat</h1>
            <div>
                <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
            </div>
            <Link onClick={event => (!name || !room) ?  event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button className="button mt-20" type="submit">Sign In</button>
            </Link>
        </div>
    )
}

export default JoinForm