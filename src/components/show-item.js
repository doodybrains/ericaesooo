import React from 'react'

const ShowItem = (props) => (
  <a href={props.field.link} target="_blank" className="show-item">
    <div>{props.field.date}</div>
    <div>{props.field.venue}</div>
    <div>{props.field.otherPerformers}</div>
  </a>
)


export default ShowItem
