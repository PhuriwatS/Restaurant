import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FormActions from '../actions'
import { GenerateTable } from './index';

class ReservationForm extends Component {
  render() {
    const { reservationForm, actions } = this.props
    const { counterBar, tableForEight, tableForFour, tableForTwo } = reservationForm
    
    return (
      <div className='reservationFormWrapper'>
        <div className='reservationSection'>
          <label className='customLabel'>CounterBar (1seat)</label>
          <GenerateTable reservationStore={counterBar} action={actions} />
        </div>
        <div className='reservationSection'>
          <label className='customLabel'>Table for 8 seats</label>
          <GenerateTable reservationStore={tableForEight} action={actions} />
        </div>
        <div className='reservationSection'>
          <label className='customLabel'>Table for 4 seats</label>
          <GenerateTable reservationStore={tableForFour} action={actions} />
        </div>
        <div className='reservationSection'>
          <label className='customLabel'>Table for 2 seats</label>
          <GenerateTable reservationStore={tableForTwo} action={actions} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reservationForm: state.reservationReducer
})// get data from store

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(FormActions, dispatch),
}); // Connect Action

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
