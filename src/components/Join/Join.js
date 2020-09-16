//
//  Join.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = (props) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    // if (props.duplicate === undefined) {
    //     props.duplicate = false;
    // }
    // console.log(props.duplicate);
    return (
        <div>
        { props.duplicate ? 
            <div>
                <div className="joinOuterContainer">
                    <div className="joinInnerContainer">
                        <p className="duplicatemessage">That username is already taken.</p> 
                        <p className="duplicatemessage">Please use another one!</p> 
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
                </div>
            </div>
            : 
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
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
            </div>
        }
        </div>

    )
}

export default Join;
