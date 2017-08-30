import React, { Component } from 'react'
import NumericInput from 'react-numeric-input'

class PromotionMgtForm extends Component {
  render() {
    return (
      <div>
        <p className='titlePromotionMgt'>Promotion Management</p>
        <div className='rowMgt'>
          <div className='widthLeft'>
            Title:
          </div>
          <div className='widthRight'>
            <input type='text' />
          </div>
        </div>
        <div className='clear'></div>
        <div className='rowMgt'>
          <div className='widthLeft'>
            Discount(%):
          </div>
          <div className='widthRight'>
            <NumericInput
              name='noOfCustomers'
              min={1}
              max={100}
              step={1}
              onChange={(value) => console.log(value)}
              value={this.props.discount}
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
              name='noOfCustomers'
              min={0}
              max={100}
              step={1}
              onChange={(value) => console.log(value)}
              value={this.props.discount}
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
              name='noOfCustomers'
              min={0}
              max={1000000}
              step={1}
              onChange={(value) => console.log(value)}
              value={this.props.discount}
            />
          </div>
        </div>
        <div className='clear'></div>
        <div className='rowMgt'>
          <div className="generateBtn">Generate Promotion</div>
        </div>
      </div>
    )
  }
}

export default PromotionMgtForm
