let initState = {
  customer: 0,
  price: 0,
  discount: 0,
  totalPrice: 0
}

const restaurantReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GENERATE_PRICE':
      return { ...initState, customer:action.customer, price: action.price }
    case 'PAY_BILL_VALUE':
      const { customer, price, discount, totalPrice } = action
      return { 
        ...initState, 
        customer,
        price,
        discount, 
        totalPrice 
      }
    case 'DEFAULT_VALUE_GENERAL':
      return { ...initState }
    default:
      return state
  }
}

export default restaurantReducer
