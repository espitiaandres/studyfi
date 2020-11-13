//
//  Chat.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import Chat from '../../components/Chat/Chat';

const chatPropsTest = {
    location: "name=testUser&room=testRoom&tz=GMT",
    item: {
        name: "testSong",
        artists: [{
            name: "testArtist"
        }]
    },
    user: "testUser",
    season: true
}

test('should render Chat component correctly', () => {
    const wrapper = shallow(
        <Chat
            location={chatPropsTest.location}
            item={"chatPropsTest.item"}
            user={chatPropsTest.user}
            season={chatPropsTest.season}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
