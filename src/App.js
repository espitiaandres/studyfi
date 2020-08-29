//
//  App.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { Component } from "react";
import * as $ from "jquery";
// install axios?
// install node-sass to optimize mobile display
import hash from './utils/hash';
import Dashboard from './components/Dashboard/Dashboard';
import Player from './components/Player/Player';
import LandingPage from './components/LandingPage/LandingPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0,
      no_data: false,
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
    }

    // set interval for polling every 5 seconds
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // clear the interval to save resources
    clearInterval(this.interval);
  }

  tick() {
    if(this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        // Checks if the data is not empty
        if(!data) {
          this.setState({
            no_data: true,
          });
          return;
        }

        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          no_data: false 
        });
      }
    });



    // axios.get('https://api.spotify.com/v1/me/player', {
    //   params: {
    //     Authorization: "Bearer " + token
    //   }
    // })
    // .then((data) => {
    //   // Checks if the data is not empty
    //   if(!data) {
    //     this.setState({
    //       no_data: true,
    //     });
    //     return;
    //   }
    //   this.setState({
    //     item: data.item,
    //     is_playing: data.is_playing,
    //     progress_ms: data.progress_ms,
    //     no_data: false /* We need to "reset" the boolean, in case the
    //                       user does not give F5 and has opened his Spotify. */
    //   });
    // })
  }


  // BQCpRL-_b1aZ7j4jPYqamOV_U4FTOpHHZ9FYRcVFJccMl--IXAqASzMFCRuCf8Z2I6ybHOZv2T76M_e6_ttiOU-MIa9_B7-u-gWjSjTQMcJyyQ4YPnzBZPPKrpi-K0UQk53munoJnuoaReZXj6J1IlQ


//   <Player
//   item={this.state.item}
//   is_playing={this.state.is_playing}
//   progress_ms={this.state.progress_ms}
// />

  render() {
    return (
      <div>
          {!this.state.token && <div><LandingPage /></div>}
          {this.state.token && !this.state.no_data && (
            <Dashboard
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.state.progress_ms}
            />
          )}
          {this.state.no_data && <NotFoundPage />}
      </div>
    );
  }
}

export default App;