import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FormActions from '../actions'

class Payment extends Component {  
  render() {
    const { billForm, actions, data } = this.props
    const { price, discount } = data
    const amount = price - discount
    return (
      <div id='payment' className='billFormWrapper'>
        <div className='billSection'>
          <p><strong>Price(฿):</strong> {!price ? 0 : price} </p>
          <p><strong>Discount(฿):</strong> {!discount ? 0 : discount}</p>
          <p><strong>Amount(฿):</strong> {!amount ? 0 : amount}</p>
          <p><strong>Coupon:</strong> <input type='text' /></p>
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
