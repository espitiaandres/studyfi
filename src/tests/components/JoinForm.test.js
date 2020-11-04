//
//  JoinForm.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import JoinForm from '../../components/JoinForm/JoinForm';

test('should render JoinForm component correctly', () => {
    const wrapper = shallow(<JoinForm />);
    expect(wrapper).toMatchSnapshot();
});
