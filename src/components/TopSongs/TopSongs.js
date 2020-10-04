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
import paginationFactory from 'react-bootstrap-table2-paginator';
import ReactTooltip from "react-tooltip";
import hash from '../../utils/hash';
import { topSongColumns, 
    acousticnessDesc,
    danceabilityDesc,
    energyDesc,
    keySignatureDesc,
    instrumentalnessDesc,
    valenceDesc,
    keySignaturesLetters } from '../../utils/tableFormat';
import './TopSongs.css';

const TopSongs = ({ season }) => {
    let seasonStyling = season ? "seasonStyling" : "";
    let seasonStylingAlt = season ? "seasonStylingAlt" : "";

    const [filteredData, setFilteredData] = useState([]);
    const [timerange, setTimerange] = useState('long_term');
    
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
                time_range: timerange
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
                    return allArtists += `${artist.name}, `;
                })
                topTrackFiltered.artists = allArtists.slice(0, -2);
                filteredTopTracksData.push(topTrackFiltered);
                return data.items;
            });

            audioFeaturesTracksIDs = audioFeaturesTracksIDs.slice(0, -1);

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
                    filteredTopTracksData[i].keySignature = keySignaturesLetters[audio_features[i].key];
                    filteredTopTracksData[i].instrumentalness = audio_features[i].instrumentalness;
                    filteredTopTracksData[i].valence = audio_features[i].valence;
                    filteredTopTracksData[i].key = i + 1;
                }

                setFilteredData(filteredTopTracksData);
            })
        })
    }, [timerange]);

    const pageListRenderer = ({ pages, onPageChange }) => {
        const pageWithoutIndication = pages.filter((p) => typeof p.page !== 'string');
        return (
          <div>
            {
              pageWithoutIndication.map(p => (
                <button 
                    className={p.page % 2 === 1 ? 
                                `songsTablePagination ${seasonStyling}` : 
                                `songsTablePagination ${seasonStylingAlt}`} 
                    onClick={() => onPageChange(p.page)}
                >
                    {p.page}
                </button>
              ))
            }
          </div>
        );
      };
      
    const options = {
        pageListRenderer,
        paginationSize: 10,
        pageStartIndex: 1,
        sizePerPageList: [{
            text: '5', value: 5
        }]
    };
            
    return (
        <div id="topsongs">
            <h1 className="songsTableTitle">your most listened to artists and tracks</h1>
            <div className="songsTableTimeRanges">
                <button 
                    className={`songsTableTimeRangeButton ${seasonStyling}`} 
                    onClick={() => setTimerange('short_term')}
                >
                    ... of the last 4 weeks
                </button>
                <button 
                    className={`songsTableTimeRangeButton ${seasonStylingAlt}`} 
                    onClick={() => setTimerange('medium_term')}
                >
                    ... of the Last 6 months
                </button>
                <button 
                    className={`songsTableTimeRangeButton ${seasonStyling}`} 
                    onClick={() => setTimerange('long_term')}
                >
                    ... of all time
                </button>
            </div>
            <div className="columnDescriptions">
                <ReactTooltip className="tooltips" id="acousticness" type="light" effect="solid" place="top">
                    <span>{acousticnessDesc}</span>
                </ReactTooltip>
                <button className={`tooltip ${seasonStyling}`} data-tip data-for="acousticness">acousticness</button>

                <ReactTooltip className="tooltips" id="danceability" type="light" effect="solid" place="top">
                    <span>{danceabilityDesc}</span>
                </ReactTooltip>
                <button className={`tooltip ${seasonStylingAlt}`} data-tip data-for="danceability">danceability</button>

                <ReactTooltip className="tooltips" id="energy" type="light" effect="solid" place="top">
                    <span>{energyDesc}</span>
                </ReactTooltip>
                <button className={`tooltip ${seasonStyling}`} data-tip data-for="energy">energy</button>

                <ReactTooltip className="tooltips" id="keysignature" type="light" effect="solid" place="top">
                    <span>{keySignatureDesc}</span>
                </ReactTooltip>
                <button className={`tooltip ${seasonStyling}`} data-tip data-for="keysignature">key signature</button>

                <ReactTooltip className="tooltips" id="instrumentalness" type="light" effect="solid" place="top">
                    <span>{instrumentalnessDesc}</span>
                </ReactTooltip>
                <button className={`tooltip ${seasonStylingAlt}`} data-tip data-for="instrumentalness">instrumentalness</button>

                <ReactTooltip className="tooltips" id="valence" type="light" effect="solid" place="top">
                    <span>{valenceDesc}</span>
                </ReactTooltip>
                <button className={`tooltip ${seasonStyling}`} data-tip data-for="acousticness">valence</button>
            </div>
            <div className="songsTable">
                <BootstrapTable
                    keyField="id"
                    data={filteredData}
                    columns={topSongColumns}
                    pagination={paginationFactory(options)}
                />
            </div>
        </div>
    )
}

export default TopSongs
