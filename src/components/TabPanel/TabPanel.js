//
//  TabPanel.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const TabPanel = ({ children, value, index, playlistsInfo, playlistsSongs, token, ...other }) => {
  const [features, setFeatures] = useState({});

  useEffect(() => {
    if (JSON.stringify(playlistsSongs) !== "{}") {
      let ids = "";
      let chosenID = playlistsInfo[value].id; 
      if (playlistsSongs[chosenID].length > 100) {
        const chunk = 100;
        const j = playlistsSongs[chosenID].length;
        for (let i = 0; i < j; i += chunk) {
            let temparray = playlistsSongs[chosenID].slice(i,i+chunk);
            ids = temparray.join();
            getAudioFeatures(ids, chosenID);
        }
      } else {
        ids = playlistsSongs[chosenID].join();
        getAudioFeatures(ids, chosenID);
      }
    }
  }, [value]);

  let featuresFetched = {};

  const getAudioFeatures = (ids, playlist) => {
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/audio-features',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        ids
      }
    }).then(({ data: { audio_features } }) => {
      if (!featuresFetched[playlist]) {
        featuresFetched[playlist] = [...audio_features];
      } else {
        featuresFetched[playlist].push(...audio_features);
      }

      console.log(featuresFetched);
      setFeatures(featuresFetched);

      // send featuresFetched to get metadata (add into utils folder): average, standard deviation, and other things for the following categories:
      // acoustiness,
      // danceability,
      // duration_ms,
      // energy,
      // instrumentalness,
      // liveness,
      // loudness, 
      // speechiness,
      // tempo

    }).catch((error) => {
      console.log(error);
    });
  }

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
      {
        playlistsInfo[value]
        ?
        <div>
          <div>
            {playlistsInfo[value].name}
          </div>
          <div>
            {playlistsInfo[value].description}
          </div>
          <div>
            {playlistsInfo[value].id}
          </div>
          <div>
            {playlistsSongs[playlistsInfo[value].id] ? playlistsSongs[playlistsInfo[value].id].length : "test"}
          </div>
        </div>
        :
        <div>
          sorry, playlists unable to load...
        </div>
      }
    </div>
  );
}
  
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
