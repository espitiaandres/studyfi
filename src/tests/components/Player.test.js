//
//  Player.test.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React from 'react';
import { shallow } from 'enzyme';
import Player from '../../components/Player/Player';

const playerPropsTest = {
    item: {
        name: "testSong",
        artists: [{
            name: "testArtist"
        }],
        album: {
            images: [{
                url: "www.google.com"
            }],
            name: "testAlbum",
            release_date: "2020-01-01"
        },
        duration_ms: 1000
    },
    isPlaying: true,
    progressms: 1,
    shuffleState: false,
    repeatState: false,
    season: true,
    device: "testDevice",
    token: "mytoken"
}

test('should render Player component correctly', () => {
    const wrapper = shallow(<Player />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Player component correctly with data', () => {
    const wrapper = shallow(
        <Player 
            item={playerPropsTest.item}
            isPlaying={playerPropsTest.isPlaying}
            progressms={playerPropsTest.progressms}
            shuffleState={playerPropsTest.shuffleState}
            repeatState={playerPropsTest.repeatState}
            season={playerPropsTest.season}
            device={playerPropsTest.device}
            token={playerPropsTest.token}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
