export const authEndpoint: string = "https://accounts.spotify.com/authorize";

//const redirectUri: string = "http://localhost:3000/";                    // dev redirectUri

export const redirectUri: string = "https://espitiaandres.com/studyfi/"; // prod redirectUri

export const scopes: string[] = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
  "playlist-read-private",
];
