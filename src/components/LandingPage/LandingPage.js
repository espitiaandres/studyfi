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

const LandingPage = () => {
    return (
        <div className="main-wrapper-landing-page">
            <div className="app-title">Studyfi</div>
            <TypistLoop interval={700} >
                {[
                'A',
                ''
                ].map((text) => 
                    <Typist 
                    className="app-description" 
                    avgTypingDelay={60}  
                    key={text} 
                    startDelay={0}
                    >
                        A place to study, listen to music, and chat with friends.
                    </Typist>
                )}
            </TypistLoop>
            <a 
                className="login-button" 
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                target=""
            >
                <p className="login-description">Login with Spotify</p>
            </a>
            <div className="footer">
                <div>{`© Studyfi ${currentYear}`}</div>
                <div>Created by Andres Espitia</div>
            </div>
        </div>
    )
}

export default LandingPage;
