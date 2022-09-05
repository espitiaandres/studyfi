//
//  LandingPage.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from '../../utils/config';
import moment from 'moment';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import './LandingPage.css';

const currentYear = moment().format('YYYY');

console.log(`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`)

const LandingPage = () => {
    return (
        <div className="main-wrapper-landing-page">
            <div className="app-title">
                Studyfi
            </div>
            <div className="app-description">
                <div>A place to</div>
                <TypistLoop interval={800}>
                    {[
                    'study',
                    'listen to music',
                    'chat with friends'
                    ].map((text) => 
                        <Typist 
                            avgTypingDelay={60}  
                            key={text} 
                            startDelay={300}
                        >
                            &nbsp;{text}
                        </Typist>
                    )}
                </TypistLoop>
            </div>
            <a 
                className="login-button" 
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                target=""
            >
                <p className="login-description">Login into Spotify</p>
            </a>
            <div className="footer">
                <div>{`© Studyfi ${currentYear}`}</div>
                <div>Created by Andres Espitia</div>
            </div>
        </div>
    )
}

export default LandingPage;
