import React from 'react'
import Link from 'gatsby-link'
import '../../styles/index.scss'
const Header = () => (
  <div className="header">
    <a className="link animated shake" href="#shows"><span className="link-box">shows</span></a>
    <a className="link animated shake" href="#articles"><span className="link-box">press</span></a>
    <h1><a href="#" className="animated slideInDown"><span className="link-box">ERICA ESO</span></a></h1>
    <a className="link animated shake" href="#watch"><span className="link-box">watch</span></a>
    <a className="link animated shake" href="#listen"><span className="link-box">listen</span></a>
  </div>
)

export default Header
