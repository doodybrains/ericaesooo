import React from 'react'
import axios from 'axios'
import PostItem from './post-item'

class Songs extends React.Component {
  constructor() {
    super()
    this.state = { data: null, error: null }
  }

  componentWillMount() {
    axios
      .get(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=post`)
      .then((res) => {
        this.setState({ data: res.data.items[0]})
      })
      .catch((error) => {
        this.setState({ data: error})
      });
  }

  render() {
    return (
      <div id="listen" className="section">
        {this.state.data ? (
          <div>
            <h1>Songs</h1>
            <PostItem data={this.state.data} />
          </div>
        ) : (<h1>loading</h1>)}
      </div>
    )
  }
}


export default Songs
