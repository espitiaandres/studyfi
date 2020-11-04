//
//  TopSongs.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import TopSongs from '../../components/TopSongs/TopSongs';

const topSongsPropsTest = {
    season: true,
    token: "mytoken"
}

test('should render TopSongs component correctly', () => {
    const wrapper = shallow(<TopSongs />);
    expect(wrapper).toMatchSnapshot();
});

test('should render TopSongs component correctly', () => {
    const wrapper = shallow(
        <TopSongs 
            season={topSongsPropsTest.season}
            token={topSongsPropsTest.token}
        />
    );
    expect(wrapper).toMatchSnapshot();
});