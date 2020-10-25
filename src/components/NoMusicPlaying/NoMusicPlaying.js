//
//  NoMusicPlaying.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import './NoMusicPlaying.css';

const NoMusicPlaying = () => {
    return (
        <div className="noMusicPlayingMessage">
            <h1>hmm...</h1>
            <p>
                It seems that you're on Spotify but you're not currently listening to music. Listen to music for something to appear here!
            </p>
        </div>
    )
}

export default NoMusicPlaying;
