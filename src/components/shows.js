import React from 'react'
import axios from 'axios'
import ShowItem from './show-item'
import '../styles/shows.scss'

class Shows extends React.Component {
  constructor() {
    super()
    this.state = { data: null, error: null }
  }

  componentWillMount() {
    axios
      .get(`https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}&content_type=allShows`)
      .then((res) => {
        this.setState({ data: res.data.items})
      })
      .catch((error) => {
        this.setState({ data: error})
      });
  }

  render() {
    const {data} = this.state;
    console.log(data);

    if (data) {
      console.log(data[0].fields.currentShows)
    }

    return (
      <div id="shows" className="section">
        {data ? (
          <div className="show-wrapper">
            <h1>Shows</h1>
            <div className="all-shows">
              this section is coming soon...
            </div>
          </div>
        ) : (<h1>loading</h1>)}
      </div>
    )
  }
}


export default Shows
