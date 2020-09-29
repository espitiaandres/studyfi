//
//  TopSongs.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import hash from '../../utils/hash';
import './TopSongs.css';

function TopSongs() {
    const token = hash.access_token;
    let filteredTopTracksData = [];

    useEffect(() => {
        let audioFeaturesTracksIDs = "";

        axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/me/top/tracks',
            headers: {
            'Authorization': `Bearer ${token}`
            },
            params: {
                limit: 50,
                time_range: 'long_term'
            }
        }).then(({ data }) => {
            // console.log(data.items);    
            
            data.items.map(song => {
                let allArtists = "";
                const topTrackFiltered = {};        
                topTrackFiltered.name = song.name;
                topTrackFiltered.album = song.album.name;
                topTrackFiltered.albumCover = song.album.images[2].url;
                topTrackFiltered.releaseDate = song.album.release_date;
                topTrackFiltered.id = song.id;
                audioFeaturesTracksIDs += song.id + ",";
                song.artists.map((artist) => {
                    allArtists += `${artist.name}, `;
                })
                topTrackFiltered.artists = allArtists.slice(0, -2);
                filteredTopTracksData.push(topTrackFiltered);
            });

            audioFeaturesTracksIDs = audioFeaturesTracksIDs.slice(0, -1);

            // following link explains what each category indicates.
            // https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/

            axios({
                method: 'get',
                url: 'https://api.spotify.com/v1/audio-features/',
                headers: {
                'Authorization': `Bearer ${token}`
                },
                params: {
                    ids: audioFeaturesTracksIDs
                }
            }).then((response) => {
                filteredTopTracksData.map((track) => {
                    response.data.audio_features.map((feature) => {
                        track.acousticness = feature.acousticness;
                        track.danceability = feature.danceability;
                        track.energy = feature.energy;
                        track.key = feature.key
                        track.instrumentalness = feature.instrumentalness;
                        track.valence = feature.valence;
                    })
                })
                console.log(filteredTopTracksData);
            })
        })
    }, []);

    return (
        <div>
            <h1>your most listened to artists and tracks</h1>
        </div>
    )
}

export default TopSongs
