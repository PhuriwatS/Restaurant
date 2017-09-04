import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FormActions from '../actions'

class Payment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      discount: 0
    }
  }

  checkDiscount(coupon) {
    const { promotionForm, data } = this.props
    const { price, customers } = data
    const [getCoupon] = promotionForm.filter(value => coupon === value.code)
    getCoupon && price>getCoupon.rules.basePrice && customers>getCoupon.rules.customerNum ? this.setState({discount: getCoupon.discount}) : 0
  }

  render() {
    const { actions, data } = this.props
    const tableIncreaseNum = data.tableType === 'counterBar' ? data.customers : 1
    const tableData = { tableType: data.tableType, tableIncreaseNum }
    const { id, price, customers } = data
    const { discount } = this.state
    const amount = price * (100-discount)/100
    return (
      <div id='payment' className='paymentFormWrapper'>
        <div className='billSection'>
          <p><strong>Price(฿):</strong> {!price ? 0 : price} </p>
          <p><strong>Discount(%):</strong> {!discount ? 0 : discount}</p>
          <p><strong>Amount(฿):</strong> {!amount ? 0 : amount}</p>
          <p><strong>Coupon:</strong> <input type='text' onBlur={coupon => this.checkDiscount(coupon.target.value)} /></p>
          <a className='generateBtn' onClick={() => {
            actions.updateReserveTable(id)
            actions.updateIncreaseTable(tableData)
            }}>PAY BILL</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  promotionForm: state.promotionReducer,
  tableForm: state.tableReducer
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(FormActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
