import React, { Component } from 'react'
import NumericInput from 'react-numeric-input'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FormActions from '../actions'

class PromotionMgtForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
      text: '',
      discount: 0,
      rules: {
        customerNum: 0,
        basePrice: 0
      }
    }
  }

  render() {
    const { actions } = this.props
    console.log(this.props.promotionForm);
    
    return (
      <div>
        <p className='titlePromotionMgt'>Promotion Management</p>
        <div className='rowMgt'>
          <div className='widthLeft'>
            Code:
          </div>
          <div className='widthRight'>
            <input type='text' onBlur={value => this.setState({code: value.target.value})} />
          </div>
        </div>
        <div className='clear'></div>
        <div className='rowMgt'>
          <div className='widthLeft'>
            Text:
          </div>
          <div className='widthRight'>
            <input type='text' onBlur={value => this.setState({text: value.target.value})} />
          </div>
        </div>
        <div className='clear'></div>
        <div className='rowMgt'>
          <div className='widthLeft'>
            Discount(%):
          </div>
          <div className='widthRight'>
            <NumericInput
              name='discount'
              min={1}
              max={100}
              step={1}
              onBlur={value => this.setState({discount: parseInt(value.target.value, 10)})}
              value={this.state.discount}
            />
          </div>
        </div>
        <div className='clear'></div>
        <div className='rowMgt'>
          <div className='widthLeft'>
            Customer(s):
          </div>
          <div className='widthRight'>
            <NumericInput
              name='customer'
              min={0}
              max={100}
              step={1}
              onBlur={value => this.setState({rules: { ...this.state.rules, customerNum: parseInt(value.target.value, 10)}})}
              value={this.state.rules.customerNum}
            />
          </div>
        </div>
        <div className='clear'></div>
        <div className='rowMgt'>
          <div className='widthLeft'>
            Price:
          </div>
          <div className='widthRight'>
            <NumericInput
              name='price'
              min={0}
              max={1000000}
              step={1}
              onBlur={value => this.setState({rules: { ...this.state.rules, basePrice: parseInt(value.target.value, 10)}})}
              value={this.state.rules.basePrice}
            />
          </div>
        </div>
        <div className='clear'></div>
        <div className='rowMgt'>
          <div className="generateBtn" onClick={() => actions.createPromotion(this.state)}>Generate Promotion</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PromotionMgtForm)
