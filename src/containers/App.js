import React, { Component } from 'react'

class App extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentDidUpdate() { }

  componentWillUnmount() { }

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default App

