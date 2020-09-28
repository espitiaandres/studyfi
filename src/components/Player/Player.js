//
//  Player.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';
import moment from 'moment';
import axios from 'axios';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import './Player.css';
import hash from '../../utils/hash';
import { calculateCenter, trans } from '../../utils/springFunctions';

library.add(fas);

const Player = ({ item, isPlaying, progressms, season }) => {  
  const [colors, setColors] = useState([]);
  const [hoveredOn, setHoveredOn] = useState(false);
  const token = hash.access_token
  let seasonStyling = season ? "seasonStyling" : "";
  let seasonStylingAlt = season ? "seasonStylingAlt" : "";

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

  const [prop, setProp] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 180, friction: 10 },
  }));

  const onMouseMove = ({ clientX: x, clientY: y }) => setProp({ xys: calculateCenter(x, y) });

  const onMouseLeave = () => {
      setProp({ xys: [0, 0, 1] });
      setHoveredOn(false);
  }

  const onMouseEnter = () => setHoveredOn(true);

  let songCurrentTime = progressms;
  let songDuration = 0;
  let releaseDateDMY = "0000-00-00";
  let releaseDateYear =  typeof releaseDateDMY === "string" ?  releaseDateDMY.split("-")[0] : "";
  let albumImageURL = "";
  let allArtists = "";
  let songCurrentTimeMinutesSeconds = "";
  let songDurationMinutesSeconds = "";  
  let googleSearchString = item.artists[0].name + "+" + item.album.name ;
  googleSearchString = googleSearchString.replace(" ", "+");

  if (item) {
    songDuration = item.duration_ms;
    releaseDateDMY = item.album.release_date;
    releaseDateYear =  typeof releaseDateDMY === "string" ?  releaseDateDMY.split("-")[0] : "";
    albumImageURL = item.album.images[0].url;
    songCurrentTimeMinutesSeconds = moment(songCurrentTime).format("mm:ss");
    songDurationMinutesSeconds = moment(songDuration).format("mm:ss");
    item.artists.map((artist) => {
      allArtists += `| ${artist.name} |`
    })
  }
    
  const progressBarStyles = {
    width: (songCurrentTime * 100 / songDuration) + '%'
  };
  
  return (
    <div className="nowPlayingSide">
      <ColorExtractor getColors={getColors}>
        <img src={albumImageURL} className="imageStyles" />
      </ColorExtractor>
      <div className="swatchesStyles">
        {renderSwatches()}
      </div>
      <div>
        <animated.div
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ transform: prop.xys.interpolate(trans) }}
            onMouseEnter={onMouseEnter}
        >
          <div>
            <a href={`https://www.google.com/search?q=${googleSearchString}`} target="_blank">
              <img src={albumImageURL} className="nowPlayingAlbumCover"/>
            </a>
          </div>
        </animated.div>
      </div>
      <div className="swatchesStyles">
        {renderSwatches()}
      </div>
      <div className="nowPlayingName">
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

      <div className="nowPlayingArtists">
        {allArtists}
      </div>

      <div className="nowPlayingAlbum">
        {item.album.name} - {releaseDateYear}
      </div>

      <div className="nowPlayingStatus">
        <div >
          <button className={`skipbuttons ${seasonStyling}`} onClick={previousSong}>
            <FontAwesomeIcon className="controlButtonsColouring" icon={["fas", "arrow-alt-circle-left"]} />
          </button>
        </div>
        {isPlaying ? "playing" : "paused"}
        <div >
          <button className={`skipbuttons ${seasonStyling}`} onClick={nextSong}>
            <FontAwesomeIcon className="controlButtonsColouring" icon={["fas", "arrow-alt-circle-right"]} />
          </button>
        </div>
      </div>

      <div className="durationMenu">
        <p className="durationMenuTimes">{songCurrentTimeMinutesSeconds}</p>
        <div className="progress">
          <div className={`progressBar ${seasonStylingAlt} `} style={progressBarStyles} />
        </div>    
        <p className="durationMenuTimes">{songDurationMinutesSeconds}</p>
      </div>
    </div>
  )
}

export default Player;
