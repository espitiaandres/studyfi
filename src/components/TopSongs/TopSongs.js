//
//  TopSongs.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import TopSongsDescriptions from '../TopSongsDescriptions/TopSongsDescriptions';
import TopArtistsDescriptions from '../TopArtistsDescriptions/TopArtistsDescriptions';
import { topSongColumns, topArtistColumns, keySignaturesLetters } from '../../utils/tableFormat';
import './TopSongs.css';

const TopSongs = ({ season }) => {
    let seasonStyling = season ? "seasonStyling" : "";
    let seasonStylingAlt = season ? "seasonStylingAlt" : "";

    const [timerange, setTimerange] = useState('long_term');
    const [topTracks, setTopTracks] = useState([]);
    const [topTracksPopulated, setTopTracksPopulated] = useState(false);
    const [topArtists, setTopArtists] = useState([]);
    const [topArtistsPopulated, setTopArtistsPopulated] = useState(false);
    const [queryParam, setQueryParam] = useState('tracks');

    const token = useSelector(state => state.token);

    let filteredTopTracksData = [];
    let filteredTopArtistsData = [];

    useEffect(() => {
        requestTemplate("tracks").then(({ data }) => topTracksParse(data));
        requestTemplate("artists").then(({ data }) => topArtistsParse(data));
    }, [timerange, token]);

    const requestTemplate = (endpoint) => {
        return axios({
            method: 'get',
            url: `https://api.spotify.com/v1/me/top/${endpoint}`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                limit: 50,
                time_range: timerange
            }
        });
    }

    const topTracksParse = (data) => {
        let audioFeaturesTracksIDs = "";
        data.items.map((song) => {
            let allArtists = "";
            const topTrackFiltered = {};
            topTrackFiltered.name = song.name;
            topTrackFiltered.album = song.album.name;
            topTrackFiltered.albumCover = song.album.images[2].url;
            topTrackFiltered.releaseDate = song.album.release_date;
            topTrackFiltered.id = song.id;
            topTrackFiltered.popularity = song.popularity;
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
            setTopTracks(filteredTopTracksData);
            setTopTracksPopulated(true);
        })
    }

    const topArtistsParse = (data) => {
        data.items.map((artist) => {
            let allGenres = "";
            const topArtistFiltered = {};
            const followersRegex = /\B(?=(\d{3})+(?!\d))/g;
            topArtistFiltered.followers = artist.followers.total.toString().replace(followersRegex, ",");
            artist.genres.map((genre) => {
                return allGenres += "|" + genre + "| ";
            });
            topArtistFiltered.genre = allGenres.slice(0, -1);
            topArtistFiltered.name = artist.name;
            topArtistFiltered.photo = artist.images[2].url;
            topArtistFiltered.popularity = artist.popularity;
            filteredTopArtistsData.push(topArtistFiltered);
            return data.items;
        });
        setTopArtists(filteredTopArtistsData);
        setTopArtistsPopulated(true);
    }

    const pageListRenderer = ({ pages, onPageChange }) => {
        const pageWithoutIndication = pages.filter((p) => typeof p.page !== 'string');
        return (
          <div>
            {
              pageWithoutIndication.map(p => (
                <p
                    className={p.page % 2 === 1 ? 
                                `songsTablePagination ${seasonStyling}Pagination` : 
                                `songsTablePagination ${seasonStylingAlt}Pagination`}
                    onClick={() => onPageChange(p.page)}
                >
                    {p.page}
                </p>
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
            text: '5', 
            value: 5
        }]
    };
            
    return (
        <div id="topsongs" className="topSongs">
            <h1 className="songsTableTitle">
                your most listened to 
                <button 
                    className={`songsAndArtistsButton ${seasonStylingAlt}`} 
                    onClick={() => setQueryParam('artists')}
                >
                    artists
                </button>
                and 
                <button 
                    className={`songsAndArtistsButton ${seasonStylingAlt}`}
                    onClick={() => setQueryParam('tracks')}
                >
                    tracks
                </button>
            </h1>
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
            {
                (queryParam === "tracks" && topArtistsPopulated && topTracksPopulated)
                ? 
                <div>
                    <TopSongsDescriptions season={season} />
                    {
                        <div className="songsTable">
                            <BootstrapTable
                                keyField="id"
                                data={topTracks}
                                columns={topSongColumns}
                                pagination={paginationFactory(options)}
                            />
                        </div>
                    }
                </div>
                : 
                <div>
                    <TopArtistsDescriptions season={season} />
                    {
                        <div className="songsTable">
                            <BootstrapTable
                                keyField="id"
                                data={topArtists}
                                columns={topArtistColumns}
                                pagination={paginationFactory(options)}
                            />
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default connect(undefined, undefined)(TopSongs);
