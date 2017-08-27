import React from 'react'
import routes from '../routes'
import DevTools from './DevTools'

export default class Root extends React.Component {
  render() {
    return (
      <div id="main-container">
        {routes}
        {process.env.NODE_ENV === 'production' ? null : <DevTools />}
      </div>
    )
  }
}
