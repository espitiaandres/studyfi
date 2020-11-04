//
//  ProgressBar.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const progressBarPropsTest = {
    songCurrentTime: 1000,
    songDuration: 10000,
    seasonStylingAlt: "seasonStylingAlt"
}

test('should render ProgressBar component correctly', () => {
    const wrapper = shallow(<ProgressBar />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ProgressBar component correctly with data', () => {
    const wrapper = shallow(
        <ProgressBar
            songCurrentTime={progressBarPropsTest.songCurrentTime}
            songDuration={progressBarPropsTest.songDuration}
            seasonStylingAlt={progressBarPropsTest.seasonStylingAlt}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
