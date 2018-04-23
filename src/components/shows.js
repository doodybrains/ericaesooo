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

        this.setState({ data: res.data.items[0].fields.currentShows})
      })
      .catch((error) => {
        this.setState({ data: error})
      });

  }

  render() {
    const {data} = this.state;

    return (
      <div id="shows" className="section">
        {data ? (
          <div className="container show-wrapper">
            <h1>Shows</h1>
            <div className="all-shows">
              {data.map((show, i) => {
                return (
                  <div key={i}>
                    <ShowItem id={show.sys.id} />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (<h1>loading</h1>)}
      </div>
    )
  }
}


export default Shows
