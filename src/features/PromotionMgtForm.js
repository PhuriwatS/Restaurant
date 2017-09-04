import React, { Component } from 'react'
import NumericInput from 'react-numeric-input'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FormActions from '../actions'

class PromotionMgtForm extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      promoData: {
        code: props.data ? props.data.promoData.code : '',
        text: '',
        discount: 0,
        rules: {
          customerNum: 0,
          basePrice: 0
        }
      },
      action: 'add'
    }
  }

  // componentWillReceiveProps(nextState) {
  //   const getPromoData = nextState.data.promoData
  //   console.log(getPromoData);
  //   this.setState({
  //     promoData: {
  //       code: getPromoData.code,
  //       text: getPromoData.text,
  //       discount: getPromoData.discount,
  //       rules: {
  //         customerNum: getPromoData.rules.customerNum,
  //         basePrice: getPromoData.rules.basePrice
  //       }
  //     },
  //     action: 'edit'
  //   })
  // }

  render() {
    const { actions } = this.props
    
    return (
      <div>
        <p className='titlePromotionMgt'>Promotion Management</p>
        <div className='rowMgt'>
          <div className='widthLeft'>
            Code:
          </div>
          <div className='widthRight'>
            <input type='text' 
              onChange={e => this.setState({
                promoData: {
                  ...this.state.promoData,
                  code: e.target.value
                }
              })} 
              value={this.state.promoData.code} />
          </div>
        </div>
        <div className='clear'></div>
        <div className='rowMgt'>
          <div className='widthLeft'>
            Text:
          </div>
          <div className='widthRight'>
            <input type='text' 
              onChange={e => this.setState({
                promoData: {
                  ...this.state.promoData,
                  text: e.target.value
                }
              })} 
              value={this.state.promoData.text} />
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
              onChange={value => this.setState({
                promoData: {
                  ...this.state.promoData,
                  discount: parseInt(value, 10)
                }
              })}
              value={this.state.promoData.discount}
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
              onChange={value => this.setState({
                promoData: {
                  ...this.state.promoData,
                  rules: { 
                    ...this.state.promoData.rules, 
                    customerNum: parseInt(value, 10)
                  }
                }
              })}
              value={this.state.promoData.rules.customerNum}
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
              onChange={value => this.setState({
                promoData: {
                  ...this.state.promoData,
                  rules: { 
                    ...this.state.promoData.rules, 
                    basePrice: parseInt(value, 10)
                  }
                }
              })}
              value={this.state.promoData.rules.basePrice}
            />
          </div>
        </div>
        <div className='clear'></div>
        <div className='rowMgt'>
          {
            this.state.action === 'add' ? 
              <div className="generateBtn" onClick={() => actions.createPromotion(this.state.promoData)}>Generate Promotion</div> :
              <div className="generateBtn" onClick={() => {
                this.setState({ action: 'add' })
                  actions.editPromotion(this.state.promoData)}
                }>Edit Promotion</div>
          }
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
