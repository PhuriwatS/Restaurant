import React, { Component } from 'react'
import { PromotionSelector } from '../common'

class AllPromotion extends Component {
  render() {
    const { action } = this.props

    return (
      <div className='billSection'>
        <label className='customLabel'>Promotions</label>
        <div className='PromotionSelectorWrapper'>
          <PromotionSelector name='LUCKYONE' detail='(15%)' promotionHandler={() => action.promotionLuckyone} />
          <PromotionSelector name='4PAY3' promotionHandler={() => action.promotionFourpaythree} />
          <PromotionSelector name='LUCKYTWO' detail='(20%)' promotionHandler={() => action.promotionLuckytwo} />
          <PromotionSelector name='OVER6000' detail='(25%)' promotionHandler={() => action.promotionOversixthousand} />
        </div>
      </div>
    )
  }
}

export default AllPromotion
