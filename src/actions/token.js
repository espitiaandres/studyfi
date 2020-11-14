//
//  token.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

export const setToken = (token) => ({
    type: 'SET_TOKEN',
    token
});

export const startSetToken = (token = "") => {
    return (dispatch, getState) => {
        return dispatch(setToken(token));
    }
}
