import { React, Component } from "react";
import VideoList  from "components/VideoList/VideoList" ;
import Player  from "components/Player/Player";
import videos from "../servises/videos.json";
import Reader from 'components/Reader/Reader';
import publication from '../servises/publication';
import GallerySection from "./GalleryAPI/GalleryAPI";

export default class App extends Component {
  state = {
    selectedVideo: null,
  }

  selectVideo = link => {
    this.setState({ selectedVideo: link});
  };


  render() {
    return (
      <div style={{padding: 24 }}>
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo}/>
        <Player url={this.state.selectedVideo}/>
         <Reader items={publication}/>
         <GallerySection />
      
      </div>
    )
  }
}

// f75c9a71334d682d914bb49ae60ed5491fe3e00f key vimeo