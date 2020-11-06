import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import axios from 'axios';
import './PlaylistStats.css';

const PlaylistStats = ({ user, token }) => {
    const [playlistsInfo, setPlaylistsInfo] = useState([]);
    const [playlistsNames, setPlaylistsNames] = useState([]);
    const [value, setValue] = useState(0);

    const getUserPlaylists = (token) => {
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
            const playlistsNamesArray = [];
            data.items.map((playlist) => {
                const info = {};
                info.description = playlist.description;
                info.id = playlist.id;
                info.images = playlist.images;
                info.name = playlist.name;

                console.log(user);


                if (playlist.owner.display_name === user || playlist.owner.display_name === "Spotify") {
                    playlistsInfoArray.push(info);
                    playlistsNamesArray.push(playlist.name);
                }

                // how to get tracks
                // "https://api.spotify.com/v1/playlists/1dz1weAfxnvT2eoxMpiCsD/tracks"

            })
            console.log(playlistsInfoArray);
            playlistsNamesArray.sort();
            setPlaylistsInfo(playlistsInfoArray);
            setPlaylistsNames(playlistsNamesArray);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getUserPlaylists(token);
    }, [user, token]);

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
            <p>{playlistsNames[index]}</p>
            <p>{user}</p>
          </div>
        );
    }
      
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };
      
    function a11yProps(index) {
        return {
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
      
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.paper,
          display: 'flex',
          height: 224,
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
            Hello from PlaylistStats component


            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two"  />
                    <Tab label="Item Three" />

                    {/* Don't delete this
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    */}
                </Tabs>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </div>
        </div>
    )
}

export default PlaylistStats;
