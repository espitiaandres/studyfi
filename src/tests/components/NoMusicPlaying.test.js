//
//  NoMusicPlaying.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import NoMusicPlaying from '../../components/NoMusicPlaying/NoMusicPlaying';

test('should render NoMusicPlaying component correctly', () => {
    const wrapper = shallow(<NoMusicPlaying />);
    expect(wrapper).toMatchSnapshot();
});
