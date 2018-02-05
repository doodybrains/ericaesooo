import React from 'react'
import axios from 'axios'
import ShowItem from './show-item'

class Shows extends React.Component {
  constructor() {
    super()
    this.state = { data: null, error: null }
  }

  componentWillMount() {
    axios
      .get(`https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}&content_type=show`)
      .then((res) => {
        this.setState({ data: res.data.items[0]})
      })
      .catch((error) => {
        this.setState({ data: error})
      });
  }

  render() {
    return (
      <div id="shows" className="section shows">
        {this.state.data ? (
          <div className="container">
            <h1>Shows</h1>
            <div className="item-wrapper">
              <ShowItem data={this.state.data} />
            </div>
          </div>

        ) : (<h1>loading</h1>)}
      </div>
    )
  }
}


export default Shows
