import React from 'react'
import Shows from '../components/shows'
import Posts from '../components/posts'
import Grid from '../components/grid'
import Dolliez from '../components/dolliez'
import Banner from '../components/banner'
import '../styles/home.scss'

const IndexPage = () => (
  <div className="main-wrapper">
    <Banner />
    <Dolliez />
    <Shows />
    <Grid />
    <Posts />
  </div>
)

export default IndexPage
