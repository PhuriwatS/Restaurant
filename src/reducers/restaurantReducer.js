let initState = [
  // customer: 0,
  // price: 0,
  // discount: 0,
  // totalPrice: 0,
  // promotionActived: 0
]

const restaurantReducer = (state = initState, action) => {
  switch (action.type) {
    case 'RESERVE_TABLE':
      return [ ...state, action.prop]
    case 'UPDATE_RESERVE_TABLE':
      return [ action.prop ]
    default:
      return state
  }
}

export default restaurantReducer
