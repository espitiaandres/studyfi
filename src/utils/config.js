//
//  config.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "53bcecd410634483b5388541c159849d";
// const redirectUri = "http://localhost:3000/";                    // dev redirectUri
const redirectUri = "https://espitiaandres.com/studyfi/";      // prod redirectUri
const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "playlist-read-private"
];

export { 
    authEndpoint, 
    clientId, 
    redirectUri, 
    scopes 
}
