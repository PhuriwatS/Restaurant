import React, { Component } from 'react'

class ListReserve extends Component {
  render() {
    return (
      <div className='billSection'>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Table Type</th>
              <th>PAY</th>
            </tr>
            {
              this.props.store.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.customers}</td>
                    <td>{value.tableType}</td>
                    <td><a href='#payment' onClick={() => this.props.getData(value)}>PAY</a></td>
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
