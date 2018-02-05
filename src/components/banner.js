import React from 'react'
import axios from 'axios'
import '../styles/banner.scss'

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

    return (
      <div>
        {this.state.data ? (
          <div className="banner">
            <p className="maintext">{this.state.data.fields.text}</p>
            <p className="subtext">{this.state.data.fields.subText}</p>
          </div>
        ) : (<h1>loading</h1>)}
      </div>
    )
  }
}


export default Banner
