//
//  TopSongsDescriptions.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import TopSongsDescriptions from '../../components/TopSongsDescriptions/TopSongsDescriptions';

const topSongsDescriptionsPropsTest = {
    season: true
}

test('should render TopSongsDescriptions component correctly', () => {
    const wrapper = shallow(<TopSongsDescriptions />);
    expect(wrapper).toMatchSnapshot();
});

test('should render TopSongsDescriptions component correctly', () => {
    const wrapper = shallow(
        <TopSongsDescriptions 
            season={topSongsDescriptionsPropsTest.season}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
