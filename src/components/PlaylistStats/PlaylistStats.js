//
//  PlaylistStats.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NoPlaylists from '../NoPlaylists/NoPlaylists';
import TabPanel from '../TabPanel/TabPanel';
import './PlaylistStats.css';

const PlaylistStats = ({ user, season }) => {
    const [playlistsInfo, setPlaylistsInfo] = useState([]);
    const [playlistsSongs, setPlaylistsSongs] = useState({});
    const [value, setValue] = useState(0);

    const token = useSelector(state => state.token);

    const getUserPlaylists = () => {
        axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/me/playlists',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                limit: 50,
                offset: 0
            }
        }).then(({ data }) => {
            const playlistsInfoArray = [];

            data.items.map((playlist) => {
                const info = {};
                info.description = playlist.description;
                info.id = playlist.id;
                info.images = playlist.images;
                info.name = playlist.name;

                if (playlist.owner.display_name === user || playlist.owner.display_name === "Spotify") {
                    playlistsInfoArray.push(info);
                }
                return data.items;
            })

            playlistsInfoArray.sort((a, b) => {
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })

            setPlaylistsInfo(playlistsInfoArray);
        }).catch((error) => {
            console.log(error);
        })
    }

    let playlistSongsFetched = {};

    const getPlaylistSongs = (id, offset) => {
        axios({
            method: 'get',
            url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
            headers: {
                'Authorization': `Bearer ${token}`
            }, params: {
                limit: 100,
                offset
            }
        }).then(({ data }) => {
            let playlistSongsIDs = [];

            if (data.items.length > 0) {
                data.items.map((p) => {
                    playlistSongsIDs.push(p.track.id);
                    return data.items;
                });
                if (!playlistSongsFetched[id]) {
                    playlistSongsFetched[id] = [...playlistSongsIDs];
                } else {
                    playlistSongsFetched[id].push(...playlistSongsIDs);
                }
            }

            if (data.items.length === data.limit) {
                getPlaylistSongs(id, offset+100);
            }
            setPlaylistsSongs(playlistSongsFetched);
        }).catch((error) => {
            console.log(error);
        })        
    }

    useEffect(() => {
        getUserPlaylists();
    }, [user, token]);

    useEffect(() => {
        playlistsInfo.map((p) => {
            getPlaylistSongs(p.id, 0);
            return playlistsInfo;
        })
    }, [playlistsInfo]);    
      
    const tabProps = (index) => {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
      
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 0.5,
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            height: '500px',
            width: '1000px'
        }, tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
        }
    }));

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    
    return (
        <div className="playlistStats">
            {
                playlistsInfo.length > 0
                ?
                <div>
                    <h1 className="playlistStatsTitle">
                        here are some stats about your playlists
                    </h1>
                    <div className={classes.root}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                        >
                            {
                                playlistsInfo.map((playlist, index) => {
                                    return (
                                        <Tab label={playlist.name} {...tabProps(index)}/>
                                    )
                                })
                            }
                        </Tabs>               
                        {
                            playlistsInfo.map((playlist, index) => {
                                return (
                                    <TabPanel 
                                        value={value} 
                                        index={index} 
                                        playlistsInfo={playlistsInfo} 
                                        playlistsSongs={playlistsSongs} 
                                        season={season}
                                    >
                                        {playlist.name}
                                    </TabPanel>
                                )
                            })
                        }
                    </div>
                </div>
                :
                <NoPlaylists />
            }
        </div>
    )
}

export default connect(undefined, undefined)(PlaylistStats);
