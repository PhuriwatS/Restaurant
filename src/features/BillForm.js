import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as BillFormActions from '../actions'
import { NoOfCustomer, PaymentDetail, AllPromotion } from './index.js'

class BillForm extends Component {
  render() {
    const { billForm, promotionForm, actions } = this.props
    return (
      <div id='billForm' className='billFormWrapper'>
        <NoOfCustomer action={propData => actions.priceChange(propData)} customerNum={billForm.customer} />
        <AllPromotion promotionStore={promotionForm} action={actions} />
        <PaymentDetail billStore={billForm} promotionStore={promotionForm} action={actions} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  billForm: state.restaurantReducer,
  promotionForm: state.promotionReducer
})// get data from store

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BillFormActions, dispatch),
}); // Connect Action

export default connect(mapStateToProps, mapDispatchToProps)(BillForm);
