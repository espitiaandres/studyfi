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

const ChatApp = () => {
    return (
        <Router basename="/studyfi">
            <Route path="/" exact component={Join} />
            <Route path="/chat" exact component={Chat} />
        </Router>
    )
}

export default ChatApp;
