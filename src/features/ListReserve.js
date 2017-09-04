import React, { Component } from 'react'

class ListReserve extends Component {
  render() {
    const filterActive = this.props.store.filter(value => !value.isDeleted)
    return (
      <div className='billSection'>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Table Type</th>
              <th>PAY</th>
              <th>CANCEL</th>
            </tr>
            {
              filterActive.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.customers}</td>
                    <td>{value.tableType}</td>
                    <td><a href='#payment' onClick={() => this.props.getData(value)}>{value.status === 'unpaid' ? 'PAY' : null}</a></td>
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

export default ListReserve
