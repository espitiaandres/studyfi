//
//  JoinForm.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import { calculateCenter, trans } from '../../utils/springFunctions';
import './JoinForm.css';

const JoinForm = ({ season }) => {    
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [tz, setTZ] = useState('');
    const [hoveredOn, setHoveredOn] = useState(false);

    let seasonStyling = season ? "seasonStyling" : "";
    let seasonStylingAlt = season ? "seasonStylingAlt" : "";

    const onJoinFormSubmit = (e) => {
        e.preventDefault();
    }

    let timezones = [];

    for (let i = 12; i >= 1; i--) {
        timezones.push("GMTplus" + i.toString());
    }

    timezones.push("GMT");

    for (let i = 1; i <= 11; i++) {
        timezones.push("GMTminus" + i.toString());
    }

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
        <form onSubmit={onJoinFormSubmit}>
            <div>
                <h1 className={`heading ${seasonStylingAlt}Header`}>chat</h1>
                <div>
                    <input placeholder="name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input placeholder="room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <div>
                    <select className="joinInput mt-20" defaultValue={'default'} onChange={(event) => setTZ(event.target.value)}>
                        <option value='default'>choose your timezone</option>
                        {timezones.map(
                            (tzs) => <option value={tzs}>
                                        {tzs.includes("plus") ? tzs.replace("plus", "+") : tzs.replace("minus", "-")}
                                    </option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <Link 
                        onClick={e => (!name || !room || !tz) ?  e.preventDefault() : null} 
                        to={`/chat?name=${name}&room=${room}&tz=${tz}`}
                    >
                        <button className={`button mt-20 ${seasonStyling}`} type="submit">sign in</button>
                    </Link>
                </div>
                <div className="icon-scroll-chat">
                    <animated.div
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                        style={{ transform: prop.xys.interpolate(trans) }}
                        onMouseEnter={onMouseEnter}
                    >
                        <LinkScroll to="topsongs" spy={true} smooth={true} duration={400}>
                            <FontAwesomeIcon icon={"chevron-down"} size="2x" />
                        </LinkScroll>
                    </animated.div>
                </div>
            </div>            
        </form>
    )
}

export default JoinForm
