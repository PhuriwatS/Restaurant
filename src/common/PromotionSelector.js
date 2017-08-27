import React, { Component } from 'react'

class PromotionSelector extends Component {  
  render() {
    const { name, detail, promotionHandler } = this.props

    return (
      <div className='PromotionSelector'>
        <a onClick={promotionHandler()}>
          <div>
            <i className='fa fa-gift fa-2x' aria-hidden='true'></i>
            <br />
            <p>{name}</p>
            <p>{detail}</p>
          </div>
        </a>
      </div>
    )
  }
}

export default PromotionSelector
