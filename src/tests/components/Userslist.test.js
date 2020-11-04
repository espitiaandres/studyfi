//
//  Userslist.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import Userslist from '../../components/Userslist/Userslist';

const usersListPropsTest = {
    users: [{
        id: "id1",
        name: 'user1',
        room: 'room1'
    }, {
        id: "id2",
        name: "user2",
        room: 'room1'
    }, {
        id: "id3",
        name: "user3",
        room: 'room2'
    }]
}

test('should render NoMusicPlaying component correctly', () => {
    const wrapper = shallow(
        <Userslist
            users={usersListPropsTest.users}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
