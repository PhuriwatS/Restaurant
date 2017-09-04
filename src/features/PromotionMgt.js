import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FormActions from '../actions'
import { PromotionMgtForm, PromotionMgtDetail, ListPromotion } from './index';

class PromotionMgt extends Component {
  render() {
    const { promotionForm } = this.props
    return (
      <div className='promotionMgtFormWrapper'>
        <div className='promotionMgtSection'>
          <div className='promotionMgtBorder'>
            <PromotionMgtForm data={this.state}/>
          </div>
        </div>
        <div className='promotionMgtSection'>
          <div className='promotionMgtBorder overflowScroll'>
            <PromotionMgtDetail />
            <ListPromotion store={promotionForm} getEdit={(promoData) => this.setState({promoData})} />
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PromotionMgt)
