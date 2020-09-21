//
//  Input.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import './Input.css';

const Input = ({ message, setMessage, sendMessage, item }) => {
    console.log(item);

    const shareSong = (event) => {
        let songDescription = `I'm listening to: ${item.name} `;
        let allArtists = "";

        item.artists.map((artist) => {
            allArtists += `- ${artist.name} `
        })

        allArtists = allArtists.substring(0, allArtists.length - 1);
        songDescription += allArtists;
        console.log(songDescription);
        setMessage(songDescription);
        sendMessage(event);
    }

    return (
        <form className="form">
        <input
            className="input"
            type="text"
            placeholder="Enter a message..."
            value={message} 
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
        <button className="sendButton" onClick={(event) => shareSong(event)}>Share song!</button>
    </form>
    )
}

export default Input;
