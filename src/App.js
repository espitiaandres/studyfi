//
//  App.js
//  react-spotify-player
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

import React, { Component } from "react";
import axios from 'axios';
import hash from './utils/hash';
import Dashboard from './components/Dashboard/Dashboard';
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
    let _token = hash.access_token;

    if (_token) {
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
    }

    this.interval = setInterval(() => {
      this.tick();
      console.log(_token);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    if(this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }

  getCurrentlyPlaying(token) {
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me/player',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(({ data }) => {
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
    });
  }


  // BQCpRL-_b1aZ7j4jPYqamOV_U4FTOpHHZ9FYRcVFJccMl--IXAqASzMFCRuCf8Z2I6ybHOZv2T76M_e6_ttiOU-MIa9_B7-u-gWjSjTQMcJyyQ4YPnzBZPPKrpi-K0UQk53munoJnuoaReZXj6J1IlQ



  render() {
    return (
      <div>
        <body className="App">
          {!this.state.token && <div><LandingPage /></div>}
          {this.state.token && !this.state.no_data && (
            <Dashboard
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.state.progress_ms}
            />
          )}
          {this.state.no_data && <NotFoundPage />}  
        </body>
      </div>
    );
  }
}

export default App;