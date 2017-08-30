import React, { Component } from 'react'
import './App.css'
import { Header } from './common'
import { BillForm, PromotionMgt } from './features'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <BillForm />
        <PromotionMgt />
      </div>
    );
  }
}

export default App;
