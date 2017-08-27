import React, { Component } from 'react'

class PaymentDetail extends Component {
  generateDiscount(bill, promotion) {
    const { customer, price } = bill
    const { discount, rules } = promotion.active
    const { customerNum, basePrice } = rules
    if (customer >= customerNum && price >= basePrice) {
      return Math.floor(price * (discount / 100))
    }
    if (price >= 1000) {
      return Math.floor(price * (15 / 100))
    }
    return 0
  }

  render() {
    const { billStore, promotionStore, action } = this.props
    const discountPrice = this.generateDiscount(billStore, promotionStore)
    const totalPrice = billStore.price - discountPrice

    return (
      <div className='billSection'>
        <label className='customLabel'>Payment Detail</label>
        <div className='PaymentDetailWrapper'>
          <p>Price (459฿/person): <span className='floatRight'>{billStore.price}</span></p>
          <p>Discount: <span className='floatRight underline'>({discountPrice})</span></p>
          <ul>
            <li>{promotionStore.active.text}</li>
          </ul>
          <p>Amount: <span className='floatRight dbUnderline bold'>{totalPrice}</span></p>
        </div>
        <div className='paymentBtn paymentBtnHover'>Pay Bill</div>
        <div className='paymentBtn cancelBtnHover' onClick={() => action.setDefaultValue}>Cancel</div>
      </div>
    )
  }
}

export default PaymentDetail
