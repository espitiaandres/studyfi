//
//  Join.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import Join from '../../components/Join/Join';

test('should render Join component correctly', () => {
    const wrapper = shallow(<Join />);
    expect(wrapper).toMatchSnapshot();
});
