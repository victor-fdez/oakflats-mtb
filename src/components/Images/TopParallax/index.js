import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import Countdown from 'react-countdown-now'
import { css } from 'glamor'
import Img from 'gatsby-image'
import { parallaxChildren, registerNow, countdown } from './style.scss'
import oakflatsLogo from '../../../static/img/oakflats-2018.jpg'
import './style.scss'

const changePageMaps = () => {
  window.location.href = 'https://goo.gl/maps/pm7B3NRBdE12'
}

const changePageRegistration = () => {
  window.location.href = 'https://www.usacycling.org/events'
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (
      <span>
        The race is now happening! Don't miss it! <br />
        <br />
        <input
          type="button"
          class="btn btn-warning"
          value="Google Maps"
          onClick={changePageMaps}
        />
      </span>
    )
  } else {
    // Render a countdown
    return (
      <span>
        <span>{days}</span> days, <span>{hours}</span> hours,{' '}
        <span>{minutes}</span> minutes, and <span>{seconds}</span> seconds until
        the race!
      </span>
    )
  }
}

class TopParallax extends React.Component {
  constructor(props) {
    super(props)
    const data = this.props
    const { image, date, title } = data
    let width = 0
    let $ = typeof window !== 'undefined' && window.$
    if ($) width = $('body').width()
    else width = typeof window !== 'undefined' && window.innerWidth
    const height = 500 //width > 750 ? 500 : ( width > 400 ? 300 : 250 )
    this.state = {
      viewport: { width, height },
      date,
      title,
      image,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize)
    this._resize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize)
  }

  _resize = () => {
    let $ = typeof window !== 'undefined' && window.$
    let width
    let { imageSet } = this.state
    if ($) width = $('body').width() || window.innerWidth
    const height = 500 //width > 750 ? 500 : ( width > 400 ? 300 : 250 )
    this.setState({
      viewport: {
        ...this.state.viewport,
        height,
        width,
      },
    })
    this.forceUpdate()
  }

  render() {
    const data = this.state
    const { image, date, title, viewport: { width, height } } = data
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    const dateObj = new Date(date)
    const dateFriendly = dateObj.toLocaleDateString('en-US', options)
    return (
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image: image,
              amount: 0.5,
              slowerScrollRate: true,
            },
          ]}
          style={{
            height: `${height}px`,
          }}
        >
          <div className={`parallaxChildren`}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <img
                    src={oakflatsLogo}
                    css={{
                      display: 'block',
                      maxWidth: '100%',
                      height: 'auto',
                      maxHeight: '200',
                      margin: 'auto auto',
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div
                  className="col text-center"
                  css={{ paddingTop: '1em', paddingBottom: '1em' }}
                >
                  <h3 className="event-date">{dateFriendly}</h3>
                  <input
                    type="button"
                    className={`btn btn-danger registerNow`}
                    value="Register Now!"
                    onClick={changePageRegistration}
                  />
                </div>
              </div>
              <div className="row">
                <div className={`col text-center countdown`}>
                  <Countdown date={dateObj} renderer={renderer} />
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    )
  }
}

export default TopParallax
