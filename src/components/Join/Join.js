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

const Join = ({ duplicate }) => {
    
    return (
        <div>
        { 
            duplicate ? 
            <div>
                <div className="joinOuterContainer">
                    <div className="joinInnerContainer">
                        <p className="duplicatemessage">That username is already taken.</p> 
                        <p className="duplicatemessage">Please use another one!</p>
                        <JoinForm />
                    </div>
                </div>
            </div>
            : 
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <JoinForm />
                </div>
            </div>
        }
        </div>

    )
}

export default Join;
