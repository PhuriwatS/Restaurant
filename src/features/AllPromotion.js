import React, { Component } from 'react'
import { PromotionSelector } from '../common'

class AllPromotion extends Component {
  render() {
    const { promotionStore, action } = this.props
    const { promotionNo } = promotionStore.active

    return (
      <div className='billSection'>
        <label className='customLabel'>Promotions</label>
        <div className='PromotionSelectorWrapper'>
          <PromotionSelector name='LUCKYONE' detail='(15%)' promotionHandler={() => action.promotionLuckyone} isActived={promotionNo===1 ? 'active' : null} />
          <PromotionSelector name='4PAY3' promotionHandler={() => action.promotionFourpaythree} isActived={promotionNo===2 ? 'active' : null} />
          <PromotionSelector name='LUCKYTWO' detail='(20%)' promotionHandler={() => action.promotionLuckytwo} isActived={promotionNo===3 ? 'active' : null} />
          <PromotionSelector name='OVER6000' detail='(25%)' promotionHandler={() => action.promotionOversixthousand} isActived={promotionNo===4 ? 'active' : null} />
        </div>
      </div>
    )
  }
}

export default AllPromotion
