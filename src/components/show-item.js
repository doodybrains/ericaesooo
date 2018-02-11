import React from 'react'
import axios from 'axios'
import '../styles/shows.scss'

class ShowItem extends React.Component {
  constructor() {
    super()
    this.state = { data: null, error: null }
  }

  componentWillMount() {
    axios
      .get(`https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries/${this.props.id}?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}&content_type=allShows`)
      .then((res) => {
        this.setState({ data: res.data.fields})
      })
      .catch((error) => {
        this.setState({ data: error})
      });
  }

  render() {
    const {data} = this.state;
    const link = data.link;
    let content = null;

    if (data) {
      if (data.link) {
        content = (
          <a href={data.link} target="_blank" className="show-item link">
            <p>{data.date}</p>
            <p>{data.venue}</p>
            <p>{data.otherPerformers}</p>
          </a>
        )
      } else {
        content = (
          <div className="show-item">
            <p>{data.date}</p>
            <p>{data.venue}</p>
            <p>{data.otherPerformers}</p>
          </div>
        )
      }
    }

    return (
      <div id="shows" className="show-items">
        {content}
      </div>
    )
  }
}


export default ShowItem
