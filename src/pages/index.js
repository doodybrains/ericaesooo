import React from 'react'
import Shows from '../components/shows'
import Articles from '../components/articles'
import Videos from '../components/videos'
import Songs from '../components/songs'
import Grid from '../components/grid'
import Dolliez from '../components/dolliez'
import Banner from '../components/banner'
import '../styles/home.scss'

const IndexPage = () => (
  <div className="main-wrapper">
    <Banner />
    <Songs />
    <Shows />
    <Grid />
    <Articles />
    <Dolliez />
    <Videos />
  </div>
)

export default IndexPage
