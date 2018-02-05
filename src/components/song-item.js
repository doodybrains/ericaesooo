import React from 'react'

const SongItem = () => (
  <div>
    <h2>{this.props.data.fields.description}</h2>
    <h3>{this.props.data.fields.date}</h3>
    <h4>{this.props.data.fields.venue}</h4>
    <p>{this.props.data.fields.otherPerformers}</p>
  </div>
)



export default SongItem
