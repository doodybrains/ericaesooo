import React from 'react'

const ShowItem = (props) => (
  <div className="show-item">
    <h2>{props.data.fields.description}</h2>
    <h3>{props.data.fields.date}</h3>
    <h4>{props.data.fields.venue}</h4>
    <p>{props.data.fields.otherPerformers}</p>
  </div>
)


export default ShowItem
