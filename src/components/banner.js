import React from 'react'
import axios from 'axios'
import '../styles/banner.scss'
import ReactPlayer from 'react-player'

class Banner extends React.Component {
  constructor() {
    super()
    this.state = { data: null, error: null }
  }

  componentWillMount() {
    axios
      .get(`https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}&content_type=banner`)
      .then((res) => {
        this.setState({ data: res.data.items[0]})
      })
      .catch((error) => {
        this.setState({ data: error})
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        {this.state.data ? (
          <div className="banner">
            <div className="left">
              <div className="embed song">
                <h2>{this.state.data.fields.bannerSongTitle}</h2>
                <ReactPlayer width='100%' height='100%' url={this.state.data.fields.songLink} />
              </div>

              <div className="embed video">
                <h2>{this.state.data.fields.bannerVideoTitle}</h2>
                <ReactPlayer width='100%' height='100%' url={this.state.data.fields.videoLink} />
              </div>
            </div>
            <div className="right">
              <a className="main-link" target="_blank" href={this.state.data.fields.link}>

                <p className="maintext">{this.state.data.fields.text}</p>
                <p className="subtext">{this.state.data.fields.subText}</p>
              </a>

            </div>
          </div>
        ) : (<h1>loading</h1>)}
      </div>
    )
  }
}


export default Banner
