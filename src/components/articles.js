import React from 'react'
import axios from 'axios'
import ArticleItem from './article-item'
import '../styles/articles.scss'

class Articles extends React.Component {
  constructor() {
    super()
    this.state = { data: null, error: null }
  }

  componentWillMount() {
    axios
      .get(`https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}&content_type=allArticles`)
      .then((res) => {
        this.setState({ data: res.data.items[0].fields.articles})
      })
      .catch((error) => {
        this.setState({ data: error})
      });

  }

  render() {
    const {data} = this.state;
    return (
      <div id="articles" className="section">
        {data ? (
          <div className="container article-wrapper">
            <h1>Press</h1>
            <div className="all-articles">
              {data.map((art, i) => {
                return (
                  <div key={i}>
                    <ArticleItem id={art.sys.id} />
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


export default Articles
