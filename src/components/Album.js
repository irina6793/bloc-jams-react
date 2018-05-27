import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
     super(props);

     const album = albumData.find( album => {
       return album.slug === this.props.match.params.slug
     });

     this.state = {
       album: album,
       currentSong: album.songs[0],
       isPlaying: false,
       hover: true,
       play: false,
  };
     this.audioElement = document.createElement('audio');
     this.audioElement.src = album.songs[0].audioSrc;
   }
   play() {
     this.audioElement.play();
     this.setState({ isPlaying: true });
     if (this.state.play) {
           this.setState({ play: false });
           this.audio.pause();
         } else {
           this.setState({ play: true });
           this.audio.play();
         }
       this.setState({play: !this.state.play});
   }
   pause() {
     this.audioElement.pause();
     this.setState({ isPlaying: false });
   }
   setSong(song) {
     this.audioElement.src = song.audioSrc;
     this.setState({ currentSong: song });
   }
   handleSongClick(song) {
     const isSameSong = this.state.currentSong === song;
     if (this.state.isPlaying && isSameSong) {
       this.pause();
     } else {
       if (!isSameSong) { this.setSong(song); }
       this.play();
     }
   }
   render() {
     return (
       <div>
       <section className="album">
         <section id="album-info">
         <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
         <div className="album-details">
             <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
           </div>
         </section>
         <table id="song-list">
          {
           this.state.album.songs.map((song, index) =>
          <tr className="song" key={index} onClick={() => this.handleSongClick(song)} >
          <button className="icon-play-pause">
             <td id="song-number">{index + 1}</td>
             <span className="ion-play"></span>
             <span className="ion-pause"></span>
          </button>
             <td id>{song.title}</td>
             <td id>{song.duration}</td>
        </tr>
         )
         }
           <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
        </table>
      </section>
    </div>
  )
}
}
 export default Album;
