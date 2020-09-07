export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = "53bcecd410634483b5388541c159849d";
export const redirectUri = "http://localhost:3000/";                    // dev redirectUri
// export const redirectUri = "http://andres-espitia.com/studyfi/";     // prod redirectUri
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];