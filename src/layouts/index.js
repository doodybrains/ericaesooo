import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div className="outer-wrapper">
    <Helmet
      title="e r i c a e s o"
      meta={[
        { name: 'description', content: 'erica eso' },
        { name: 'keywords', content: 'erica eso' },
      ]}
    >
    <link href="https://fonts.googleapis.com/css?family=Bangers|Ubuntu+Mono:400,400i" rel="stylesheet" />

    </Helmet>
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
