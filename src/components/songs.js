import React from 'react'
import axios from 'axios'
import SongItem from './song-item'
import '../styles/songs.scss'

class Songs extends React.Component {
  constructor() {
    super()
    this.state = { data: null, error: null }
  }

  componentWillMount() {
    axios
      .get(`https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}&content_type=track`)
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
      <div id="listen" className="section">
        {data ? (
          <div className="container">
            <h1>Tracks</h1>
            <div className="all-tracks">
              {data.map((song, i) => {
                return (
                  <div key={i} className="track">
                    <SongItem data={song} />
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


export default Songs
