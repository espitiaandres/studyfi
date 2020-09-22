//
//  Join.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import './Join.css';
import JoinForm from '../JoinForm/JoinForm';

const Join = ({ duplicate, season }) => {
    // console.log(season);
    return (
        <div>
        { 
            duplicate ? 
            <div>
                <div className="joinOuterContainer">
                    <div className="joinInnerContainer">
                        <p className="duplicatemessage">That username is already taken.</p> 
                        <p className="duplicatemessage">Please use another one!</p>
                        <JoinForm season={season}/>
                    </div>
                </div>
            </div>
            : 
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <JoinForm season={season}/>
                </div>
            </div>
        }
        </div>
    )
}

export default Join;
