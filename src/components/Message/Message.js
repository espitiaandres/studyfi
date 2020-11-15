//
//  Message.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import ReactEmoji from 'react-emoji';
import { connect, useSelector } from 'react-redux';
import './Message.css';

const Message = ({ message: { user, text, currentTime }, name }) => {
    const season = useSelector(state => state.season);
    const seasonStyling = season ? "seasonStyling" : "";
    const seasonStylingAlt = season ? "seasonStylingAlt" : "";

    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser ? (
            <div>
                <p className="timestamp">{currentTime}</p>
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmedName}</p>
                    <div className={`messageBox backgroundMain ${seasonStyling}`}>
                        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            </div>
        ) : (
            <div>
                <p className="timestampotherusers">{currentTime}</p>
                <div className="messageContainer justifyStart">
                    <div className={`messageBox backgroundLight ${seasonStylingAlt}`}>
                        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
                </div>
            </div>
        )
    )
}

export default connect(undefined, undefined)(Message);
