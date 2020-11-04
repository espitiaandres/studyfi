//
//  Input.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../components/Input/Input';

test('should render Input component correctly', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
});
