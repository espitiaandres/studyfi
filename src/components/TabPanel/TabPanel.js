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

const TabPanel = ({ children, value, index, playlistsInfo, playlistsSongs, season, token, ...other }) => {
  const [features, setFeatures] = useState({});
  const [acousticnessAvg, setAcousticnessAvg] = useState(0);
  const [danceabilityAvg, setDanceabilityAvg] = useState(0);
  // const [durationmsAvg, setDurationmsAvg] = useState(0);
  const [energyAvg, setEnergyAvg] = useState(0);
  const [instrumentalnessAvg, setInstrumentalnessAvg] = useState(0);
  const [livenessAvg, setLivenessAvg] = useState(0);
  const [speechinessAvg, setSpeechinessAvg] = useState(0);
  const [valenceAvg, setValenceAvg] = useState(0);

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

      console.log(value);
      console.log(featuresFetched);
      setFeatures(featuresFetched);

      const {
        acousticnessAvgReturn,
        danceabilityAvgReturn,
        // durationmsAvgReturn,
        energyAvgReturn,
        instrumentalnessAvgReturn,
        livenessAvgReturn,
        speechinessAvgReturn,
        valenceAvgReturn
      } = averageFeaturesOutput(featuresFetched[playlist]);

      console.log(acousticnessAvgReturn);
      setAcousticnessAvg(acousticnessAvgReturn);
      setDanceabilityAvg(danceabilityAvgReturn);
      // setDurationmsAvg(durationmsAvgReturn);
      setEnergyAvg(energyAvgReturn);
      setInstrumentalnessAvg(instrumentalnessAvgReturn);
      setLivenessAvg(livenessAvgReturn);
      setSpeechinessAvg(speechinessAvgReturn);
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
            {
              playlistsSongs[playlistsInfo[value].id] 
              ?
              <div>
                <div>
                  <p>acoustiness</p>
                  <div>
                    <ApexChart value={acousticnessAvg} />
                  </div>                  
                </div>
                <div>
                  <p>danceability</p>
                  <div>
                    <ApexChart value={danceabilityAvg} />
                  </div>
                </div>
                <div>
                  <p>energy</p>
                  <div>
                    <ApexChart value={energyAvg} />
                  </div>                  
                </div>
                <div>
                  <p>instrumentalness</p>
                  <div>
                    <ApexChart value={instrumentalnessAvg} />
                  </div>                  
                </div>
                  <div>
                  <p>liveness</p>
                  <div>
                    <ApexChart value={livenessAvg} />
                  </div>                  
                </div>
                <div>
                  <p>speechiness</p>
                  <div>
                    <ApexChart value={speechinessAvg} />
                  </div>                  
                </div>
                <div>
                  <p>valence</p>
                  <div>
                    <ApexChart value={valenceAvg} />
                  </div>                  
                </div>
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
