//
//  Messages.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import Messages from '../../components/Messages/Messages';

const messagesPropsTest = {
    messages: [{
        user: "testUser",
        text: "This is my message.",
        currentTime: moment().format("HH MM"),
        room: '1'
    }],
    name: "testUser",
    season: true
}

test('should render Messages component correctly', () => {
    const wrapper = shallow(
        <Messages
            messages={messagesPropsTest.messages}
            name={messagesPropsTest.name}
            season={messagesPropsTest.season}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
