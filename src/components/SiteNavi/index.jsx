import React from 'react'
import Link from 'gatsby-link'

const cleanLink = linkName => {
  let linkLoc = `/${linkName}/`.replace(/ /g, '-')
  let cleanStr = `${linkName}`.split('/')
  cleanStr = cleanStr[cleanStr.length - 1]
  let linkCap = cleanStr
    .split(' ')
    .map(str => str.charAt(0).toUpperCase() + str.substr(1))
    .join(' ')
  return { linkLoc, linkCap }
}

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand-lg navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <Link id="#" className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-nav-scroll collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              {[
                'about us',
                'register now',
                'results',
                [
                  'info',
                  'race information',
                  'getting to the course',
                  'maps',
                  'categories',
                  'accomodations',
                ],
                'news',
                'contact',
              ].map((links, pdx) => {
                if (Array.isArray(links)) {
                  let parentLink = links.shift()
                  let { linkLoc, linkCap } = cleanLink(parentLink)
                  let active =
                    `/${location.pathname.split('/')[1]}/` === linkLoc
                      ? 'active'
                      : ''
                  return (
                    <li className={`nav-item dropdown ${active}`} key={pdx}>
                      <a
                        className="nav-link dropdown-toggle"
                        key={pdx}
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {linkCap}
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        {links.map((link, idx) => {
                          let { linkLoc, linkCap } = cleanLink(
                            `${parentLink}/${link}`
                          )
                          return (
                            <Link
                              className="dropdown-item"
                              to={linkLoc}
                              key={idx}
                            >
                              {linkCap}
                            </Link>
                          )
                        })}
                      </div>
                    </li>
                  )
                } else {
                  let { linkLoc, linkCap } = cleanLink(links)
                  return (
                    <li
                      className={
                        location.pathname === { linkLoc }
                          ? 'nav-item active'
                          : 'nav-item'
                      }
                      key={pdx}
                    >
                      <Link to={linkLoc} className="nav-link">
                        {linkCap}
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default SiteNavi
