import React, { Component } from "react";

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="time-control">
          <div className="current-time">
            {this.props.formatTime(this.props.currentTime)}{" "}
          </div>
          <input
            type="range"
            className="seek-bar"
            value={this.props.currentTime / this.props.duration || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
            time="0"
          />
        </section>
        <section id="buttons">
          <button
            type="button"
            className="btn btn-light"
            id="previous"
            onClick={this.props.handlePrevClick}
          >
            <span className="ion-skip-backward" />
          </button>
          <button
            type="button"
            className="btn btn-light"
            id="play-pause"
            onClick={this.props.handleSongClick}
          >
            <span className={this.props.isPlaying ? "ion-pause" : "ion-play"} />
          </button>
          <button
            type="button"
            className="btn btn-light"
            id="next"
            onClick={this.props.handleNextClick}
          >
            <span className="ion-skip-forward" />
          </button>
        </section>
        <section id="volume-control">
          <div className="icon ion-volume-low" />
          Volume: {this.props.currentVolume}
        </section>
        <input
          type="range"
          className="seek-bar"
          value={this.props.currentVolume}
          max="1"
          step="0.01"
          onChange={this.props.handleVolumeChange}
        />
        <div className="icon ion-volume-high" />
      </section>
    );
  }
}

export default PlayerBar;
