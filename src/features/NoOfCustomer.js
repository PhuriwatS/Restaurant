import React, { Component } from 'react'

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
          <input 
            type='number' 
            name='noOfCustomers' 
            className='noOfCustomerInput' 
            onChange={(e) => this.handlePrice(e.target.value)}
            value={this.props.customerNum}
          />
        </div>
      </div>
    )
  }
}

export default NoOfCustomer
