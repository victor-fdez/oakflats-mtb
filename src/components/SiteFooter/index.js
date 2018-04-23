import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ children }) => {
  return (
    <footer className="container" css={{ marginTop: '2em' }}>
      <hr css={{ marginTop: '2em', marginBottom: '2em' }} />
      <p className="float-right">
        <Link to="#">Back to top</Link>
      </p>
      <p>
        © 2017-2018 Oakflats, Inc. <Link to="/privacy">Privacy</Link> ·{' '}
        <Link to="/terms/">Terms</Link>
      </p>
    </footer>
  )
}

export default Footer
