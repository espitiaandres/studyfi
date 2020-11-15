//
//  season.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

export const setSeason = (season) => ({
    type: 'SET_SEASON',
    season
});

export const startSetSeason = (season = false) => {
    return (dispatch, getState) => {
        const seasonSwitch = getState().season;
        return dispatch(setSeason(!seasonSwitch));
    }
}
