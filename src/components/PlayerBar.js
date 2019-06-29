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

        <div className="total-time">
          {this.props.formatTime(this.props.duration)}
        </div>

        <section id="volume-control">
          <button id="low" onClick={this.props.handlePrevClick}>
            <span className="icon ion-volume-low" />
          </button>
          <input
            value={this.props.volume}
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
          />
          <span className="icon ion-volume-high" />
        </section>
      </section>
    );
  }
}

export default PlayerBar;
