import React, { Component } from 'react'
import './App.css'
import { Header } from './common'
import { BillForm } from './features'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <BillForm />
      </div>
    );
  }
}

export default App;
