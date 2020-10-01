//
//  TopSongs.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import hash from '../../utils/hash';
import './TopSongs.css';

const TopSongs = () => {
    const token = hash.access_token;
    let filteredTopTracksData = [];
    const [filteredData, setFilteredData] = useState([]);


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
            data.items.map((song) => {
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
            }).then(({ data: { audio_features } }) => {
                for (let i = 0; i < filteredTopTracksData.length; i++) {
                    filteredTopTracksData[i].acousticness = audio_features[i].acousticness;
                    filteredTopTracksData[i].danceability = audio_features[i].danceability;
                    filteredTopTracksData[i].energy = audio_features[i].energy;
                    filteredTopTracksData[i].keySignature = audio_features[i].key;
                    filteredTopTracksData[i].instrumentalness = audio_features[i].instrumentalness;
                    filteredTopTracksData[i].valence = audio_features[i].valence;
                    filteredTopTracksData[i].key = i + 1;
                }

                setFilteredData(filteredTopTracksData);
            })
        })
    }, []);

    function formatter(cell, row) {     
        return cell.toString().includes("http") ? 
        <span>
            <img src={cell}/>
        </span> : 
        <span>
            {cell}
        </span>;
    }

    const columns = [
        {
            text: 'Name',
            dataField: 'name',
            formatter
        },
        {
            text: 'Album',
            dataField: 'album',
            formatter
        },
        {
            text: 'Album Cover',
            dataField: 'albumCover',
            formatter
        },
        {
            text: 'Release Date',
            dataField: 'releaseDate',
            formatter
        },
        {
            text: 'Artists',
            dataField: 'artists',
            formatter
        },
        {
            text: 'Acousticness',
            dataField: 'acousticness',
            formatter
        },
        {
            text: 'Danceability',
            dataField: 'danceability',
            formatter
        },
        {
            text: 'Energy',
            dataField: 'energy',
            formatter
        },
        {
            text: 'KeySignature',
            dataField: 'keySignature',
            formatter
        },
        {
            text: 'Instrumentalness',
            dataField: 'instrumentalness',
            formatter
        },
        {
            text: 'Valence',
            dataField: 'valence',
            formatter
        }
    ]

    return (
        <div>
            <h1>your most listened to artists and tracks</h1>
            <div>
                <BootstrapTable
                    keyField="id"
                    data={filteredData}
                    columns={columns}
                />
            </div>
        </div>
    )
}

export default TopSongs
