let initState = {
  luckyone: {
    text: 'LUCKY ONE',
    discount: 15,
    rules: {
      customerNum: 0,
      basePrice: 0
    }
  },
  fourpaythree: {
    text: '4PAY3',
    discount: 25,
    rules: {
      customerNum: 4,
      basePrice: 0
    }
  },
  luckytwo: {
    text: 'LUCKY TWO',
    discount: 20,
    rules: {
      customerNum: 2,
      basePrice: 0
    }
  },
  oversixthousand: {
    text: 'OVER SIX THOUSAND',
    discount: 25,
    rules: {
      customerNum: 0,
      basePrice: 6000
    }
  },
  active: {
    text: '',
    discount: 0,
    rules: {
      customerNum: 0,
      basePrice: 0
    }
  }
}

const promotionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LUCKYONE':
      return { ...initState, active: { ...initState.luckyone } }
    case 'FOURPAYTHREE':
      return { ...initState, active: { ...initState.fourpaythree } }
    case 'LUCKYTWO':
      return { ...initState, active: { ...initState.luckytwo } }
    case 'OVERSIXTHOUSAND':
      return { ...initState, active: { ...initState.oversixthousand } }
    case 'DEFAULTVALUE':
      return { ...initState }
    default:
      return state
  }
}

export default promotionReducer
