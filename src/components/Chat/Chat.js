//
//  Chat.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Userslist from '../Userslist/Userslist';
import Join from '../Join/Join';
import './Chat.css';

let socket;

const Chat = ({ location, item, season }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [tz, setTZ] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [duplicate, setDuplicate] = useState(false);

    const backendEndpoint = 'https://react-chat-app-back-end.herokuapp.com/';

    useEffect(() => {
        const { name, room, tz } = queryString.parse(location.search);
        socket = io(backendEndpoint, {transports: ['websocket']});
        setName(name);
        setRoom(room);
        setTZ(tz);
        socket.emit('join', { name, room, tz }, () => {});

        socket.on('reconnect_attempt', () => {
            socket.io.opts.transports = ['websocket', 'polling'];
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        };
    }, [backendEndpoint, location.search]);

    useEffect(() => {
        onUserEntry();
    });

    useEffect(() => {
        socket.on('message', (message) => {
            let tzpass = tz;
            tzpass = tzpass.includes("minus") ? tzpass.replace("minus", "+") : tzpass.replace("plus", "-");
            message.currentTime = moment().tz(`Etc/${tzpass}`).format("MMM DD h:mm a");
            setMessages((messages) => [ ...messages, message ]);
        });
    }, [name]);

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    const onDisconnect = () => {
        socket.disconnect();
        socket = io(backendEndpoint, {transports: ['websocket']});
        onUserEntry();
    }

    const onUserEntry = () => {
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });

        socket.on('duplicate', (user) => {
            setDuplicate(user.duplicate);
        });
    }
    
    return (
        duplicate ? 
        <Join duplicate={duplicate} season={season} /> :                 
        <div className="outerContainer">
            <div className="container">
                <InfoBar 
                    room={room} 
                    season={season}
                    onDisconnect={onDisconnect}
                />
                <Messages 
                    messages={messages} 
                    name={name} 
                    season={season} 
                />
                <Input 
                    message={message} 
                    setMessage={setMessage} 
                    sendMessage={sendMessage} 
                    item={item} 
                    season={season}
                />
            </div>
            <Userslist users={users}/>
        </div>        
    )
}

export default Chat;
