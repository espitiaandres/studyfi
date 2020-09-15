//
//  Player.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { useState, useEffect } from 'react';
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

const Player = (props) => {
  const [colors, setColors] = useState([]);
  // const token = "BQD4J62La0Wtvog9Xy22h96o1eCNgnao9J8dszuoTNcoJlZgRnvywx4UfxYL3xAgP1vhxnputuqzGOKwLDjcyIIRoG1j1s_7c6eIf2sI55CNH7sCZbsEySh9GeOo4HhBoJV0hfoDqlg4LsgJQgpRFp4";
  const token = hash.access_token

  // Skips to the next song.
  const nextSong = () => {
    axios({
      method: 'post',
      url: 'https://api.spotify.com/v1/me/player/next',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(() => {
      console.log("skipped song");
    })
  }

  // Skips to the previous song.
  const previousSong = () => {
    axios({
      method: 'post',
      url: 'https://api.spotify.com/v1/me/player/previous',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(() => {
      console.log("replayed song");
    })
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

  let songCurrentTime = props.progress_ms;
  let songDuration = 0;
  let releaseDateDMY = "0000-00-00";
  let releaseDateYear =  typeof releaseDateDMY === "string" ?  releaseDateDMY.split("-")[0] : "";
  let albumImageURL = "";
  let allArtists = "";
  let songCurrentTimeMinutesSeconds = "";
  let songDurationMinutesSeconds = "";

  if (props.item) {
    songDuration = props.item.duration_ms;
    releaseDateDMY = props.item.album.release_date;
    releaseDateYear =  typeof releaseDateDMY === "string" ?  releaseDateDMY.split("-")[0] : "";
    albumImageURL = props.item.album.images[0].url;
    songCurrentTimeMinutesSeconds = moment(songCurrentTime).format("mm:ss");
    songDurationMinutesSeconds = moment(songDuration).format("mm:ss");
    props.item.artists.map((artist) => {
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
                {props.item.name}
              </Typist>
            )}
          </TypistLoop>
        </div>

        <div className="now-playing__artist">
          {allArtists}
        </div>

        <div className="now-playing__album">
          {props.item.album.name} - {releaseDateYear}
        </div>

        <div className="now-playing__status">
          <div >
            <button className="skipbuttons" onClick={previousSong}>
              <FontAwesomeIcon icon={["fas", "arrow-alt-circle-left"]} />
            </button>
          </div>
          {props.is_playing ? "Playing" : "Paused"}
          <div >
            <button className="skipbuttons" onClick={nextSong}>
              <FontAwesomeIcon icon={["fas", "arrow-alt-circle-right"]} />
            </button>
          </div>
        </div>

        <div className="duration-menu">
          <p className="duration-menu__times">{songCurrentTimeMinutesSeconds}</p>
          <div className="progress">
            <div className="progress__bar" style={progressBarStyles} />
          </div>    
          <p className="duration-menu__times">{songDurationMinutesSeconds}</p>
        </div>
      </div>
    </div>
  )
}

export default Player;
