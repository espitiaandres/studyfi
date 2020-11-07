//
//  TabPanel.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const TabPanel = ({ children, value, index, playlistsInfo, playlistsSongs,...other }) => {

  // find away to get song stats for each playlist. 
  // playlist is playlistsSongs[playlistsInfo[value].id] 
  // endpoint: https://api.spotify.com/v1/audio-features/, pass in each 100 songs, find away to section off playlists > 100 songs



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
          {playlistsSongs[playlistsInfo[value].id] ? playlistsSongs[playlistsInfo[value].id].length : "asd"}
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