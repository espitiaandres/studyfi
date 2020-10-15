//
//  ChatApp.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from '../Join/Join';
import Chat from '../Chat/Chat';

const ChatApp = (props) => {
    return (
        <Router basename="">
            <Route path="/" exact render={(nativeProps) => (
                <Join {...nativeProps} {...props}/>
            )}/>
            <Route path="/chat" exact render={(nativeProps) => (
                <Chat {...nativeProps} {...props}/>
            )}/>
        </Router>
    )
}

export default ChatApp;
