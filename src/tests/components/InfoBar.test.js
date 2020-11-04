//
//  InfoBar.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import InfoBar from '../../components/InfoBar/InfoBar';

test('should render InfoBar component correctly', () => {
    const wrapper = shallow(<InfoBar />);
    expect(wrapper).toMatchSnapshot();
});
