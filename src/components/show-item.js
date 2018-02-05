import React from 'react'

const ShowItem = (props) => (
  <a href={props.data.fields.link} target="_blank" className="show-item">
    <div>{props.data.fields.description}</div>
    <div>{props.data.fields.date}</div>
    <div>{props.data.fields.venue}</div>
    <div>{props.data.fields.otherPerformers}</div>
  </a>
)


export default ShowItem
