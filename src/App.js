import React, { Component } from 'react'
import './App.css'
import { Header, BillForm } from './features'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BillForm />
      </div>
    );
  }
}

export default App;
