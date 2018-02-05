import React from 'react'
import ReactPlayer from 'react-player'

const VideoItem = (props) => (
  <div className="player-wrapper">
    <h2>{props.data.fields.title}</h2>
    <ReactPlayer width='100%' height='100%' url={props.data.fields.videoUrl} />
  </div>
)

export default VideoItem
