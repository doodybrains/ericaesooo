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
      .get(`https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries/${this.props.id}?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}`)
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data.fields})
      })
      .catch((error) => {
        this.setState({ data: error})
      });
  }

  render() {
    const {data} = this.state;

    return (
      <a href={data && data.link ? data.link : ""} target="_blank" className={data && data.link ? "show-item with-link" : "show-item"}>
        {data &&
          <span>
            <div>{data.date}</div>
            <div>{data.venue}</div>
            <div>{data.otherPerformers}</div>
          </span>
        }
      </a>
    )
  }
}


export default ShowItem
