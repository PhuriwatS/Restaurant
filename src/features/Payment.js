import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FormActions from '../actions'

class Payment extends Component {
  render() {
    const { billForm, actions } = this.props

    return (
      <div id='payment' className='billFormWrapper'>
        <div className='billSection'>
          <p>Price: </p>
          <p>Discount: </p>
          <p>Amount: </p>
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
