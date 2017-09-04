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
    const { promotionForm } = this.props
    const [getCoupon] = promotionForm.filter(value => coupon===value.code)
    getCoupon ? this.setState({discount: getCoupon.discount}) : 0
  }

  render() {
    const { billForm, actions, data } = this.props
    const { price, id } = data
    const { discount } = this.state
    const amount = price * (100-discount)/100
    return (
      <div id='payment' className='paymentFormWrapper'>
        <div className='billSection'>
          <p><strong>Price(฿):</strong> {!price ? 0 : price} </p>
          <p><strong>Discount(%):</strong> {!discount ? 0 : discount}</p>
          <p><strong>Amount(฿):</strong> {!amount ? 0 : amount}</p>
          <p><strong>Coupon:</strong> <input type='text' onBlur={coupon => this.checkDiscount(coupon.target.value)} /></p>
          <a className='generateBtn' onClick={() => actions.updateReserveTable(id)}>PAY BILL</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  billForm: state.restaurantReducer,
  promotionForm: state.promotionReducer,
  tableForm: state.tableReducer
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(FormActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
