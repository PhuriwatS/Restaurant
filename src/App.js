import React, { Component } from 'react'
import './App.css'
import { BillForm, Payment } from './features'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BillForm />
        <Payment />
      </div>
    );
  }
}

export default App;
