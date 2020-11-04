//
//  TopArtistsDescriptions.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import TopArtistsDescriptions from '../../components/TopArtistsDescriptions/TopArtistsDescriptions';

const topArtistsDescriptionsPropsTest = {
    season: true
}

test('should render TopArtistsDescriptions component correctly', () => {
    const wrapper = shallow(<TopArtistsDescriptions />);
    expect(wrapper).toMatchSnapshot();
});

test('should render TopArtistsDescriptions component correctly', () => {
    const wrapper = shallow(
        <TopArtistsDescriptions 
            season={topArtistsDescriptionsPropsTest.season}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
