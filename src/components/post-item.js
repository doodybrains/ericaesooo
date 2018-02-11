import React from 'react'

const PostItem = (props) => (
  <div className="post-item">
    <h2>{props.data.fields.title}</h2>
    <h3>{props.data.fields.text}</h3>
    <a href={props.data.fields.link} target="_blank">read more</a>
  </div>
)


export default PostItem
