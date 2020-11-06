//
//  JoinForm.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import 'animate.css';
import './JoinForm.css';

const JoinForm = ({ user, season }) => {
    let seasonStyling = season ? "seasonStyling" : "";
    let seasonStylingAlt = season ? "seasonStylingAlt" : "";

    useEffect(() => {
        setName(user);
    }, [user])

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [tz, setTZ] = useState('');

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

    return (
        <form onSubmit={onJoinFormSubmit}>
            <div>
                <h1 className={`heading ${seasonStylingAlt}Header`}>chat</h1>
                <div>
                    <input className="joinInput" type="text" defaultValue={user} placeholder={user} onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input className="joinInput mt-20" type="text" placeholder="room" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <div>
                    <select className="joinInput mt-20" defaultValue={'default'} onChange={(event) => setTZ(event.target.value)}>
                        <option value='default'>choose your timezone</option>
                        {timezones.map(
                            (tzs) => <option value={tzs} key={tzs}>
                                        {tzs.includes("plus") ? tzs.replace("plus", "+") : tzs.replace("minus", "-")}
                                    </option>
                            )
                        }
                    </select>
                </div>
                <div className="signInButton">
                    <Link 
                        onClick={e => (!name || !room || !tz) ?  e.preventDefault() : null} 
                        to={`/chat?name=${name}&room=${room}&tz=${tz}`}
                    >
                        <button className={`button mt-20 ${seasonStyling}`} type="submit">sign in</button>
                    </Link>
                </div>
                <p className="listeningHabitsTagChat">
                    curious about your music listening habits?
                </p>
                <div className="icon-scroll-chat animate__animated animate__bounce animate__infinite animate__slow">
                    <LinkScroll to="topsongs" spy={true} smooth={true} duration={400}>
                        <FontAwesomeIcon icon={"chevron-down"} size="2x" />
                    </LinkScroll>
                </div>
            </div>            
        </form>
    )
}

export default JoinForm
