import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { StaticMap, Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

class MapWithMarker extends React.Component {
  constructor(props) {
    super(props)
    const data = this.props
    const { viewport, point } = data
    let pWidth = 0
    let $ = typeof window !== 'undefined' && window.$
    if ($) pWidth = $('body').width()
    else pWidth = typeof window !== 'undefined' && window.innerWidth
    const width = pWidth
    this.ref = React.createRef()
    this.state = {
      viewport: { ...viewport, width },
      point,
    }
  }

  componentDidMount() {
    let map = this.refs.child.getMap()
    window.addEventListener('resize', this._resize)
    this._resize()
    map.resize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize)
  }

  _resize = () => {
    let $ = typeof window !== 'undefined' && window.$
    let width
    if ($) width = $('body').width() || window.innerWidth
    this.setState({
      viewport: {
        ...this.state.viewport,
        width,
      },
    })
    this.forceUpdate()
  }

  _updateViewport = viewport => {
    this.setState({ viewport })
  }

  render() {
    const { viewport, point } = this.state
    //console.log(`width: ${viewport.width}`)
    return (
      <StaticMap
        {...viewport}
        ref="child"
        onViewportChange={this._updateViewport}
      >
        <Marker {...point}>
          <svg
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
          </svg>
        </Marker>
      </StaticMap>
    )
  }
}

export default MapWithMarker
