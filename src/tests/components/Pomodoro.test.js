//
//  Pomodoro.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import Pomodoro from '../../components/Pomodoro/Pomodoro';

const pomodoroPropsTest = {
    user: "testUser",
    userProfile: "https://open.spotify.com/user/testUser",
    season: true
}

test('should render Pomodoro component correctly', () => {
    const wrapper = shallow(<Pomodoro />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Pomodoro component correctly with data', () => {
    const wrapper = shallow(
        <Pomodoro 
            user={pomodoroPropsTest.user}
            userProfile={pomodoroPropsTest.userProfile}
            season={pomodoroPropsTest.season}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
