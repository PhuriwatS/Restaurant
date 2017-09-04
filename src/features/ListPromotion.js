import React, { Component } from 'react'

class ListPromotion extends Component {
  render() {
    return (
      <div className='billSection'>
        <table className='listPromotionTable'>
          <tbody>
            <tr>
              <th>Text</th>
              <th>Discount(%)</th>
              <th>EDIT</th>
              <th>CANCEL</th>
            </tr>
            {
              this.props.store.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.text}</td>
                    <td>{value.discount}</td>
                    <td><a onClick={() => this.props.getEdit(value)}>EDIT</a></td>
                    <td><a onClick={() => this.props.clearData(value)}>CANCEL</a></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListPromotion
