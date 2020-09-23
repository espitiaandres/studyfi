//
//  Player.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import moment from 'moment';
import { ColorExtractor } from 'react-color-extractor';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import './Player.css';
import hash from '../../utils/hash';

library.add(fas);

const Player = ({ item, isPlaying, progressms, season }) => {
  let seasonStyling = season ? "seasonStyling" : "";
  let seasonStylingAlt = season ? "seasonStylingAlt" : "";
  const [colors, setColors] = useState([]);
  const token = hash.access_token

  const nextSong = () => {
    axios({
      method: 'post',
      url: 'https://api.spotify.com/v1/me/player/next',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(() => { console.log("skipped song") });
  }

  const previousSong = () => {
    axios({
      method: 'post',
      url: 'https://api.spotify.com/v1/me/player/previous',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(() => { console.log("replayed song") });
  }
   
  const renderSwatches = () => {
    if (colors.length > 6) {
      colors.shift();
      colors.shift();
      colors.shift();
      colors.shift();
      colors.shift();
      colors.shift();
    }
  
    if (colors.colors) {
      return colors.colors.map((color, id) => {
        return (
          <div
            key={id}
            style={{
              backgroundColor: color,
              width: 60,
              height: 15
            }}
          />
        )
      })
    }
  }
    
  const getColors = (colorsadded) => setColors(() => ({ colors: [colors, ...colorsadded] }));

  let songCurrentTime = progressms;
  let songDuration = 0;
  let releaseDateDMY = "0000-00-00";
  let releaseDateYear =  typeof releaseDateDMY === "string" ?  releaseDateDMY.split("-")[0] : "";
  let albumImageURL = "";
  let allArtists = "";
  let songCurrentTimeMinutesSeconds = "";
  let songDurationMinutesSeconds = "";

  if (item) {
    songDuration = item.duration_ms;
    releaseDateDMY = item.album.release_date;
    releaseDateYear =  typeof releaseDateDMY === "string" ?  releaseDateDMY.split("-")[0] : "";
    albumImageURL = item.album.images[0].url;
    songCurrentTimeMinutesSeconds = moment(songCurrentTime).format("mm:ss");
    songDurationMinutesSeconds = moment(songDuration).format("mm:ss");
    item.artists.map((artist) => {
      return allArtists += `| ${artist.name} |`
    })
  }
    
  const progressBarStyles = {
    width: (songCurrentTime * 100 / songDuration) + '%'
  };
  
  return (
    <div>
      <div className="now-playing__side">
        <ColorExtractor getColors={getColors}>
          <img src={albumImageURL} className="image_styles" />
        </ColorExtractor>
        <div className="swatches_styles">
          {renderSwatches()}
        </div>
        <div >
          <img src={albumImageURL} className="now-playing__img"/>
        </div>
        <div className="swatches_styles">
          {renderSwatches()}
        </div>

        <div className="now-playing__name">
          <TypistLoop interval={2000} >
            {['a',''].map(text => 
              <Typist 
              className="pomodoroTitle" avgTypingDelay={90} key={text} startDelay={0}
              cursor={{
              show: true,
              blink: true,
              element: '',
              hideWhenDone: false,
              hideWhenDoneDelay: 1000,
              }}>
                {item.name}
              </Typist>
            )}
          </TypistLoop>
        </div>

        <div className="now-playing__artist">
          {allArtists}
        </div>

        <div className="now-playing__album">
          {item.album.name} - {releaseDateYear}
        </div>

        <div className="now-playing__status">
          <div >
            <button className={`skipbuttons ${seasonStyling}`} onClick={previousSong}>
              <FontAwesomeIcon className="controlButtonsColouring" icon={["fas", "arrow-alt-circle-left"]} />
            </button>
          </div>
          {isPlaying ? "Playing" : "Paused"}
          <div >
            <button className={`skipbuttons ${seasonStyling}`} onClick={nextSong}>
              <FontAwesomeIcon className="controlButtonsColouring" icon={["fas", "arrow-alt-circle-right"]} />
            </button>
          </div>
        </div>

        <div className="duration-menu">
          <p className="duration-menu__times">{songCurrentTimeMinutesSeconds}</p>
          <div className="progress">
            <div className={`progress__bar ${seasonStylingAlt} `} style={progressBarStyles} />
          </div>    
          <p className="duration-menu__times">{songDurationMinutesSeconds}</p>
        </div>
      </div>
    </div>
  )
}

export default Player;
