let initState = [
  {
    code: 'LUCKYONE',
    text: 'LUCKY ONE',
    discount: 15,
    rules: {
      customerNum: 0,
      basePrice: 0
    }
  },
  {
    code: '4PAY3',
    text: '4PAY3',
    discount: 25,
    rules: {
      customerNum: 4,
      basePrice: 0
    }
  },
  {
    code: 'LUCKYTWO',
    text: 'LUCKY TWO',
    discount: 20,
    rules: {
      customerNum: 2,
      basePrice: 0
    }
  },
  {
    text: 'OVER SIX THOUSAND',
    discount: 25,
    rules: {
      customerNum: 0,
      basePrice: 6000
    }
  }
]

const promotionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LUCKYONE':
    return { ...initState }
    case 'FOURPAYTHREE':
    return { ...initState }
    case 'LUCKYTWO':
    return { ...initState }
    case 'OVERSIXTHOUSAND':
    return { ...initState }
    case 'DEFAULT_VALUE_PROMOTION':
      return { ...initState }
    default:
      return state
  }
}

export default promotionReducer
