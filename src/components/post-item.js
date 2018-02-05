import React from 'react'

const PostItem = (props) => (
  <div>
    <h2>{props.data.fields.title}</h2>
    <h3>{props.data.fields.text}</h3>
  </div>
)


export default PostItem
