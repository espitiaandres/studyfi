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
import { calculateCenter, trans } from '../../utils/springFunctions';

library.add(fas);

const Player = ({ item, isPlaying, progressms, repeatState, shuffleState, season, token }) => {
  let seasonStyling = season ? "seasonStyling" : "";
  let seasonStylingAlt = season ? "seasonStylingAlt" : "";

  const [colors, setColors] = useState([]);
  const [, setHoveredOn] = useState(false);
  const [repeatError, setRepeatError] = useState('');
  const [shuffleError, setShuffleError] = useState('');
  
  const nextSong = () => {
    axios({
      method: 'post',
      url: 'https://api.spotify.com/v1/me/player/next',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  const previousSong = () => {
    axios({
      method: 'post',
      url: 'https://api.spotify.com/v1/me/player/previous',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  const pauseSong = () => {
    axios({
      method: 'put',
      url: 'https://api.spotify.com/v1/me/player/pause',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  const resumeSong = () => {
    axios({
      method: 'put',
      url: 'https://api.spotify.com/v1/me/player/play',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  const shuffleSongs = () => {
    axios({
      method: 'put',
      url: 'https://api.spotify.com/v1/me/player/shuffle',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        state: !shuffleState
      }
    }).then((response) => {
      // console.log(response);
    }).catch((error) => {
      console.log(error);
      setShuffleError(error);
    })
  }

  const repeatSongs = () => {
    const repeatStates = ["track", "context", "off"];
     const repeatStateIndex = repeatStates.indexOf(repeatState);
    const index = (repeatStateIndex !== repeatStates.length - 1) ? repeatStateIndex + 1 : 0;

    axios({
      method: 'put',
      url: 'https://api.spotify.com/v1/me/player/repeat',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        state: repeatStates[index]
      }
    }).then((response) => {
      // console.log(response);
    }).catch((error) => {
      console.log(error);
      setRepeatError(error);
    })
  }
   
  const renderSwatches = () => {
    if (colors.length > 6) {
      for (let i = 0; i < 6; i++) {
        colors.shift();
      }
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
  let googleSearchString;

  if (item) {
    songDuration = item.duration_ms;
    releaseDateDMY = item.album.release_date;
    releaseDateYear =  typeof releaseDateDMY === "string" ?  releaseDateDMY.split("-")[0] : "";
    albumImageURL = item.album.images[0].url;
    songCurrentTimeMinutesSeconds = moment(songCurrentTime).format("mm:ss");
    songDurationMinutesSeconds = moment(songDuration).format("mm:ss");
    item.artists.map((artist) => {
      return allArtists += `| ${artist.name} |`;
    })
    googleSearchString = (item.artists[0].name + "+" + item.album.name).replace(" ", "+");
  }
    
  const progressBarStyles = {
    width: (songCurrentTime * 100 / songDuration) + '%'
  };
  
  return (
    item
    ?
    <div className="nowPlayingSide">
      <ColorExtractor getColors={getColors}>
        <img src={albumImageURL} className="imageStyles" alt="albumimage" />
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
            <a href={`https://www.google.com/search?q=${googleSearchString}`} rel="noopener noreferrer" target="_blank">
              <img src={albumImageURL} className="nowPlayingAlbumCover" alt="albumimage"/>
            </a>
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

      <div className="shuffleRepeatState">
        {shuffleError !== '' ? `shuffle: ${shuffleError.message}! ` : (shuffleState ? "shuffle on " : "shuffle off ")}
        -
        {repeatError !== ''? ` repeat: ${repeatError.message}!` : ` repeating ${repeatState}`}
      </div>

      <div className="nowPlayingStatus">
        <button className={`skipbuttons ${seasonStyling}`} onClick={shuffleSongs} title="shuffle songs">
          <FontAwesomeIcon className="controlButtonsColouring" icon={["fas", "random"]} />
        </button>

        <button className={`skipbuttons ${seasonStylingAlt}`} onClick={previousSong} title="previous song">
          <FontAwesomeIcon className="controlButtonsColouring" icon={["fas", "arrow-alt-circle-left"]} />
        </button>
        {isPlaying
          ? 
          <button className={`skipbuttons ${seasonStyling}`} onClick={pauseSong} title="pause song">
            <FontAwesomeIcon className="controlButtonsColouring" icon={["fas", "pause"]} />
          </button>
          : 
          <button className={`skipbuttons ${seasonStyling}`} onClick={resumeSong} title="play song">
            <FontAwesomeIcon className="controlButtonsColouring" icon={["fas", "play"]} />
          </button>
        }
        <button className={`skipbuttons ${seasonStylingAlt}`} onClick={nextSong} title="next song">
          <FontAwesomeIcon className="controlButtonsColouring" icon={["fas", "arrow-alt-circle-right"]} />
        </button>

        <button className={`skipbuttons ${seasonStyling}`} onClick={repeatSongs} title="change repeat setting">
          <FontAwesomeIcon className="controlButtonsColouring" icon={["fas", "redo"]} />
        </button>
      </div>

      <div className="durationMenu">
        <p className="durationMenuTimes">{songCurrentTimeMinutesSeconds}</p>
        <div className="progress">
          <div className={`progressBar ${seasonStylingAlt} `} style={progressBarStyles} />
        </div>    
        <p className="durationMenuTimes">{songDurationMinutesSeconds}</p>
      </div>
    </div>
    :
    <div className="noMusicPlayingMessage">
      <h1>hmm...</h1>
      <p>
        It seems that you're on Spotify but you're not currently listening to music. Listen to music for something to appear here!
      </p>
    </div>
  )
}

export default Player;
