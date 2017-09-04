import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FormActions from '../actions'
import { NoOfCustomer, ListReserve, Payment } from './index.js'

class BillForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: ''
    }
  }

  render() {
    const { billForm, tableForm, actions } = this.props
    const { counterBar, tableForTwo, tableForFour, tableForEight } = tableForm

    return (
      <div>
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
          <p><strong>Counter bar:</strong> ({counterBar}/12 chairs) </p>
          <p><strong>Table for 2 seats:</strong> ({tableForTwo}/4 tables) </p>
          <p><strong>Table for 4 seats:</strong> ({tableForFour}/6 tables) </p>
          <p><strong>Table for 8 seats:</strong> ({tableForEight}/2 tables) </p>
          <ListReserve store={billForm} getData={data => this.setState({allData: data})} />
        </div>
        <Payment data={this.state.allData} />
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
