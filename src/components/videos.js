import React from 'react'
import axios from 'axios'
import VideoItem from './video-item'
import '../styles/videos.scss'

class Videos extends React.Component {
  constructor() {
    super()
    this.state = { data: null, error: null }
  }

  componentWillMount() {
    axios
      .get(`https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}&content_type=video`)
      .then((res) => {
        this.setState({ data: res.data.items})
      })
      .catch((error) => {
        this.setState({ data: error})
      });
  }

  render() {
    const {data} = this.state;
    return (
      <div id="watch" className="section">
        {data ? (
          <div>
            <h1>Videos</h1>
            <div className="all-videos">
              {data.map((vid, i) => {
                return (
                  <div key={i} className="vid">
                    <VideoItem data={vid} />
                  </div>
                )
              })}
            </div>
          </div>
        ) : (<h1>loading</h1>)}
      </div>
    )
  }
}


export default Videos
