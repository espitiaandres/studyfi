//
//  Message.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import Message from '../../components/Message/Message';

const messagePropsTest = {
    message: {
        user: "testUser",
        text: "This is my message.",
        currentTime: moment().format("HH MM"),
        room: '1'
    },
    name: "testUser",
    season: true
}

test('should render Message component correctly', () => {
    const wrapper = shallow(
        <Message 
            message={messagePropsTest.message}
            name={messagePropsTest.name}
            season={messagePropsTest.season}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
