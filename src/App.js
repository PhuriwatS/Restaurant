import React, { Component } from 'react'
import './App.css'
import { Header } from './common'
import { BillForm, ReservationForm } from './features'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <BillForm />
        <ReservationForm />
      </div>
    );
  }
}

export default App;
