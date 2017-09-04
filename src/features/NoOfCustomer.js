import React, { Component } from 'react'
import NumericInput from 'react-numeric-input'

class NoOfCustomer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.generateId,
      customers: 0,
      price: 0,
      discount: 0,
      total: 0,
      promotion: '',
      tableType: '',
      status: 'unpaid',
      isDeleted: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.generateId
    })
  }

  handlePrice() {
    const customersState = this.state.customers
    const customers = !customersState ? 0 : parseInt(customersState, 10)
    const price = 459 * customers
    const tableType = this.checkCustomer(customers)
    if (!tableType) {
      alert('table full')
    } else {
      const tableDecreaseNum = tableType === 'counterBar' ? customers : 1
      const tableData = { tableType, tableDecreaseNum }
      this.setState({
        price,
        tableType
      }, () => this.props.action(this.state, tableData))
    }
  }

  checkCustomer(customers) {
    const { table } = this.props
    const { counterBar, tableForTwo, tableForFour, tableForEight } = table
    if(customers <= 2 && tableForTwo) {
      return 'tableForTwo'
    }
    if(customers <= 4 && tableForFour) {
      return 'tableForFour'
    }
    if(customers <= 8 && tableForEight) {
      return 'tableForEight'
    }
    if(customers <= counterBar) {
      return 'counterBar'
    }
    return ''
  }

  render() {
    const { customers } = this.state
    return (
      <div className='billSection'>
        <div className='noOfCustomerWrapper'>
          No. of customers: 
          <NumericInput
            name='noOfCustomers'
            min={0}
            max={60}
            step={1}
            onChange={(value) => this.setState({customers: value})}
            value={customers}
          />
        </div>
        <br />
        <a className='generateBtn' onClick={() => this.handlePrice()}>reserve button</a>
      </div>
    )
  }
}

export default NoOfCustomer
