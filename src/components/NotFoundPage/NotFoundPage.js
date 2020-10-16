//
//  NotFoundPage.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import Typist from 'react-typist';
import { useSpring, animated } from 'react-spring';
import './NotFoundPage.css';
import sketchyFavicon from '../../images/sketchyFavicon.png';
import { calculateCenter, trans } from '../../utils/springFunctions';

const NotFoundPage = () => {
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
        <div className="not-found-page-wrapper">
            <Typist 
                avgTypingDelay={60} 
                cursor={{
                show: true,
                blink: true,
                element: '',
                hideWhenDone: false,
                hideWhenDoneDelay: 1000,
                }}
            >
                <h1>Hmm... it seems like you aren't listening to music.</h1>
            </Typist>
            <p>
                You need to be playing a song on Spotify for something to appear here.
            </p>
            <div>
                <animated.div
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    style={{ transform: prop.xys.interpolate(trans) }}
                    onMouseEnter={onMouseEnter}
                >
                    <div>
                        <a href="https://www.andres-espitia.com/studyfi/">
                            <img className="sketchy-spotify" src={sketchyFavicon} alt="spotify-logo"/>
                        </a>
                    </div>
                </animated.div>
            </div>
        </div>
    )
}

export default NotFoundPage
