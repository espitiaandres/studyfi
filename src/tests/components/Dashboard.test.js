//
//  Dashboard.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow} from 'enzyme';
import Dashboard from '../../components/Dashboard/Dashboard';

const dashboardPropsTest = {
    item: {
        name: "testSong",
        artists: [{
            name: "testArtist"
        }]
    },
    isPlaying: true,
    progressms: 1,
    shuffleState: false,
    repeatState: false,
    device: "testDevice",
    token: "mytoken"
}

test('should render Dashboard component correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Dashboard component correctly with mock data', () => {
    const wrapper = shallow(
        <Dashboard
            item={dashboardPropsTest.item}
            isPlaying={dashboardPropsTest.isPlaying}
            progressms={dashboardPropsTest.progressms}
            shuffleState={dashboardPropsTest.shuffleState}
            repeatState={dashboardPropsTest.repeatState}
            device={dashboardPropsTest.device}
            token={dashboardPropsTest.token}
        />
    )
})
