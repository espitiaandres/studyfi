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
      data: true,
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    let token = hash.access_token;

    if (token) {
      this.setState({
        token
      });
      this.getCurrentlyPlaying(token);
    }

    this.interval = setInterval(() => {
      this.tick();
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
          data: false,
        });
        return;
      }

      this.setState({
        item: data.item,
        is_playing: data.is_playing,
        progress_ms: data.progress_ms,
        data: true
      });
    });
  }

  render() {
    return (
      <div>
        <body className="App">
          {!this.state.token && <div><LandingPage /></div>}
          {this.state.token && this.state.data && (
            <Dashboard
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.state.progress_ms}
            />
          )}
          {!this.state.data && <NotFoundPage />}  
        </body>
      </div>
    );
  }
}

export default App;