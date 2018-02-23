import React from 'react'
import axios from 'axios'
import PostItem from './post-item'
import '../styles/posts.scss'

class Posts extends React.Component {
  constructor() {
    super()
    this.state = { data: null, error: null }
  }

  componentWillMount() {
    axios
      .get(`https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}&content_type=post`)
      .then((res) => {
        this.setState({ data: res.data.items})
      })
      .catch((error) => {
        this.setState({ data: error})
      });
  }

  render() {
    const {data} = this.state;
    let allPosts = null;

    if (data) {
      allPosts = data;
    }

    return (
      <div id="press" className="section">
        {this.state.data ? (
          <div className="container">
            <h1>Press</h1>
            <div className="item-wrapper">
              {allPosts.map((post, i) => {
                return (
                  <div key={i}>
                    <PostItem id={post.sys.id} data={post} />
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


export default Posts
