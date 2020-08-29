//
//  LandingPage.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { authEndpoint, clientId, redirectUri, scopes } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import spotifyLogo from '../../images/spotify-logo-cropped.png';
import './LandingPage.css';

function LandingPage() {
    library.add(fab);
    return (
        <div className="main-wrapper-landing-page">
            <div className="app-title">Softy Pi</div>
            <TypistLoop interval={700} >
                {[
                'A place to listen to music and chat with friends.',
                ''
                ].map(text => <Typist className="app-description" avgTypingDelay={60}  key={text} startDelay={0}>A place to listen to music and chat with friends.</Typist>)}
            </TypistLoop>
            <a 
                className="login-button" 
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`} 
                target=""
            >                
                <FontAwesomeIcon icon={['fab', 'spotify']} size="10x"/>
                <p className="login-description">Login with spotify</p>
            </a>            
            {/*Choose a different spotify logo?
            <div>
                <img src={spotifyLogo} alt="spotify-logo"/>
            </div>
            */}
        </div>
    )
}

export default LandingPage
