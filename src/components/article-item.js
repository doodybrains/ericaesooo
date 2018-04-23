import React from 'react'
import axios from 'axios'
import '../styles/articles.scss'

class ArticleItem extends React.Component {
  constructor() {
    super()
    this.state = { data: null, error: null }
  }

  componentWillMount() {
    axios
      .get(`https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries/${this.props.id}?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}`)
      .then((res) => {
        this.setState({ data: res.data.fields})
      })
      .catch((error) => {
        this.setState({ data: error})
      });
  }

  render() {
    const {data} = this.state;

    return (
      <div>
        {data &&
          <div className="article-item">
            <h4>{data.title}</h4>
            <h3>{data.text}</h3>
            <a href={data && data.link ? data.link : ""} target="_blank">read more</a>
          </div>
        }
      </div>
    )
  }
}


export default ArticleItem
