import React, { Component } from 'react'

class AllPromotion extends Component {
  generatePromotion() {
    const { promotionStore } = this.props
    return promotionStore.map((value, index) =>
      <option value={value.id}>{value.text}</option>
    )
  }

  render() {
    return (
      <div className='billSection'>
        <label className='customLabel'>Promotions</label>
        <div className='PromotionSelectorWrapper'>
          <select>
            <option value='0'>Please select promotion</option>
            { this.generatePromotion() }
          </select>
        </div>
      </div>
    )
  }
}

export default AllPromotion
