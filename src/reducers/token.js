//
//  token.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

const tokenReducerDefaultState = "";

const tokenReducer = (state = tokenReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return action.token;
        default:
            return state;
    }
}

export default tokenReducer;