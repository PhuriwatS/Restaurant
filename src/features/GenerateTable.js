import React, { Component } from 'react'

class GenerateTable extends Component {
  createReserveSeat(reserved) {
    let result = ''
    for (let index = 0; index < reserved; index++) {
      result += <i className='fa fa-check-square-o faWrapper' aria-hidden='true'></i>
    }
    return result
  }
  createAvailableSeat(available) {
    let result = ''
    for (let index = 0; index < available; index++) {
      result +=  <i className='fa fa-square-o faWrapper' aria-hidden='true'></i>
    }
    return result
  }
  
  render() {
    const { reservationStore, action } = this.props
    const { max, reserved } = reservationStore
    const available = max - reserved
    /*
    const seats = new Array({ length: available })
    console.log(seats)
    console.log(seats.length)
    */

    return (
      <div className='GenerateTableWrapper'>
        {this.createReserveSeat(reserved)}
        {this.createAvailableSeat(available)}
      </div>
    )
  }
}

export default GenerateTable
