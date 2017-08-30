import React, { Component } from 'react'
import { PromotionMgtForm, PromotionMgtDetail } from './index';

class PromotionMgt extends Component {
  render() {
    return (
      <div className='promotionMgtFormWrapper'>
        <div className='promotionMgtSection'>
          <div className='promotionMgtBorder'>
            <PromotionMgtForm />
          </div>
        </div>
        <div className='promotionMgtSection'>
          <div className='promotionMgtBorder'>
            <PromotionMgtDetail />
          </div>
        </div>
      </div>
    )
  }
}

export default PromotionMgt
