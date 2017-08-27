let initState = {
  customer: 0,
  price: 0
}

const restaurantReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GENERATE_PRICE':
      return { ...initState, customer:action.customer, price: action.price }
    default:
      return state
  }
}

export default restaurantReducer
