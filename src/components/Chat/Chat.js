//
//  Chat.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Userslist from '../Userslist/Userslist';
import Join from '../Join/Join';
import './Chat.css';

let socket;

const Chat = ({ location, item }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [duplicate, setDuplicate] = useState(false);
    const ENDPOINT = 'https://react-chat-app-back-end.herokuapp.com/';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT, {transports: ['websocket']});
        setName(name);
        setRoom(room);
        socket.emit('join', { name, room }, () => {});

        socket.on('reconnect_attempt', () => {
            socket.io.opts.transports = ['websocket', 'polling'];
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        };
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });

        socket.on('duplicate', (duplicate) => {
            setDuplicate(duplicate.duplicate);
        })
    });

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [ ...messages, message ]);
        });
    }, [name]);

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    return (
        <div>
            {
                duplicate ? 
                <Join duplicate={duplicate}/> :                 
                <div className="outerContainer">
                    <div className="container">
                        <InfoBar room={room}/>
                        <Messages messages={messages} name={name}/>
                        <Input 
                            message={message} setMessage={setMessage} sendMessage={sendMessage} item={item}
                        />
                    </div>
                    <Userslist users={users}/>
                </div>
            }
        </div>
    )
}

export default Chat;
