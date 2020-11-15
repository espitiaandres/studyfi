//
//  season.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

const seasonReducerDefaultState = false;

const seasonReducer = (state = seasonReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SEASON':
            return action.season;
        default:
            return state;
    }
}

export default seasonReducer;