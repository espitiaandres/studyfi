//
//  NoPlaylists.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logoAesthetic from '../../images/spotify-logo-aesthetic.png';
import { calculateCenter, trans } from '../../utils/springFunctions';
import './NoPlaylists.css';

const NoPlaylists = () => {

    const [, setHoveredOn] = useState(false);
    
    const [prop, setProp] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 1, tension: 180, friction: 10 },
    }));

    const onMouseMove = ({ clientX: x, clientY: y }) => setProp({ xys: calculateCenter(x, y) });

    const onMouseLeave = () => {
        setProp({ xys: [0, 0, 1] });
        setHoveredOn(false);
    }

    const onMouseEnter = () => setHoveredOn(true);

    return (
        <div className="playlistStatsTitleMissing">
            <h1>Hmm... we couldn't find any playlists.</h1>
            <p>You need to create a Spotify playlist for something to appear here.</p>
            <div>
                <animated.div
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    style={{ transform: prop.xys.interpolate(trans) }}
                    onMouseEnter={onMouseEnter}
                >
                    <div>
                        <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">
                            <img src={logoAesthetic} alt={logoAesthetic}/>
                        </a>
                    </div>
                </animated.div>
            </div>
        </div>
    )
}

export default NoPlaylists
