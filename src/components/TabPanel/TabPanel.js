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
import ApexChart from '../ApexChart/ApexChart';
import { averageFeaturesOutput } from '../../utils/featureStats';
import { holidaysColors } from '../../utils/holidays';
import './TabPanel.css';

const TabPanel = ({ children, value, index, playlistsInfo, playlistsSongs, season, token, ...other }) => {
  let color = season ? holidaysColors.christmas.color : "#1ED760";
  let colorAlt = season ? holidaysColors.christmas.colorAlt : "#1ED760";

  const [features, setFeatures] = useState({});
  const [acousticnessAvg, setAcousticnessAvg] = useState(0);
  const [danceabilityAvg, setDanceabilityAvg] = useState(0);
  const [energyAvg, setEnergyAvg] = useState(0);
  const [instrumentalnessAvg, setInstrumentalnessAvg] = useState(0);
  const [livenessAvg, setLivenessAvg] = useState(0);
  const [valenceAvg, setValenceAvg] = useState(0);

  useEffect(() => {
    let ids = "";
    let chosenID = playlistsInfo[value].id; 
    if (playlistsSongs[chosenID]) {
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
  }, [playlistsSongs, value]);

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

      setFeatures(featuresFetched);

      const {
        acousticnessAvgReturn,
        danceabilityAvgReturn,
        energyAvgReturn,
        instrumentalnessAvgReturn,
        livenessAvgReturn,
        valenceAvgReturn
      } = averageFeaturesOutput(featuresFetched[playlist]);

      setAcousticnessAvg(acousticnessAvgReturn);
      setDanceabilityAvg(danceabilityAvgReturn);
      setEnergyAvg(energyAvgReturn);
      setInstrumentalnessAvg(instrumentalnessAvgReturn);
      setLivenessAvg(livenessAvgReturn);
      setValenceAvg(valenceAvgReturn);
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
      className="tabpanelContent"
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
            {playlistsInfo[value].description}
          </div>
            {
              playlistsSongs[playlistsInfo[value].id] 
              ?
              <div>
                <div className="featureGraphs">
                  <div>
                    <p>acoustiness</p>
                    <ApexChart value={acousticnessAvg} color={color} />      
                  </div>
                  <div>
                    <p>danceability</p>
                    <ApexChart value={danceabilityAvg} color={colorAlt} />
                  </div>
                  <div>
                    <p>energy</p>
                    <ApexChart value={energyAvg} color={color} />
                  </div>
                  <div>
                    <p>instrumentalness</p>
                    <ApexChart value={instrumentalnessAvg} color={colorAlt} />
                  </div>
                  <div>
                    <p>liveness</p>
                    <ApexChart value={livenessAvg} color={color} />
                  </div>
                  <div>
                    <p>valence</p>
                    <ApexChart value={valenceAvg} color={colorAlt} />
                  </div>
                </div>
                <p>Statement about playlist goes here</p>
              </div>    
              :
              <div></div>
            }
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
