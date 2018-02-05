import React from 'react'
import ReactPlayer from 'react-player'

const SongItem = (props) => (
  <div>
    <h2>{props.data.fields.title}</h2>
    <ReactPlayer url={props.data.fields.soundCloudEmbed} />
  </div>
)

export default SongItem
