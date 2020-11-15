//
//  Messages.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import './Messages.css';

const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
        {messages
            .filter((a, b, c) => c.indexOf(a) === b)
            .map((message, i) => 
                <div key={i}>
                    <Message message={message} name={name} />
                </div>
            )
        }
    </ScrollToBottom>
)

export default Messages;
