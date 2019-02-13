import React, { Component } from 'react';
import Youtube from 'react-youtube';
import './App.css';

class App extends Component {

  _onEnd(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  render() {
    const opts = {
      width: '100%',
      height: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        enablejsapi: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
      }
    };

    return (
      <Youtube
        containerClassName="player"
        videoId="MARZnZU0ISs"
        opts={opts}
        onEnd={this._onEnd}
      />
    );
  }
}

export default App;
