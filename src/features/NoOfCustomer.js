import React, { Component } from 'react'
import NumericInput from 'react-numeric-input'

class NoOfCustomer extends Component {
  handlePrice(input) {
    const customers = !input ? 0 : parseInt(input, 10)
    const price = 459 * customers
    this.props.action({ price, customers })
  }

  render() {
    return (
      <div className='billSection'>
        <div className='noOfCustomerWrapper'>
          No. of customers: 
          <NumericInput
            name='noOfCustomers'
            min={0}
            max={60}
            step={1}
            onChange={(value) => this.handlePrice(value)}
            value={this.props.customerNum}
          />
        </div>
      </div>
    )
  }
}

export default NoOfCustomer
