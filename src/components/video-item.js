import React from 'react'
import ReactPlayer from 'react-player'

const VideoItem = (props) => (
  <div>
    <h2>{props.data.fields.title}</h2>
    <ReactPlayer url={props.data.fields.videoUrl} />
  </div>
)

export default VideoItem
