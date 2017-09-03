import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FormActions from '../actions'
import { NoOfCustomer, ListReserve } from './index.js'

class BillForm extends Component {
  render() {
    const { billForm, tableForm, actions } = this.props
    const { counterBar, tableForTwo, tableForFour, tableForEight } = tableForm

    return (
      <div id='billForm' className='billFormWrapper'>
        <NoOfCustomer 
          action={(propData, tableData) => {
            actions.reserveTable(propData)
            actions.updateDecreaseTable(tableData)
            }
          } 
          generateId={billForm.length+1}
          table={tableForm}
        />
        Counter bar: ({counterBar}/12 chairs) <br />
        Table for 2 seats: ({tableForTwo}/4 tables) <br />
        Table for 4 seats: ({tableForFour}/6 tables) <br />
        Table for 8 seats: ({tableForEight}/2 tables) <br />
        <ListReserve store={billForm} getData={data => console.log(data)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BillForm)
