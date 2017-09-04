let initState = [
  {
    id: 1,
    code: 'LUCKYONE',
    text: 'LUCKY ONE',
    discount: 15,
    rules: {
      customerNum: 0,
      basePrice: 0
    }
  },
  {
    id: 2,
    code: '4PAY3',
    text: '4PAY3',
    discount: 25,
    rules: {
      customerNum: 4,
      basePrice: 0
    }
  },
  {
    id: 3,
    code: 'LUCKYTWO',
    text: 'LUCKY TWO',
    discount: 20,
    rules: {
      customerNum: 2,
      basePrice: 0
    }
  },
  {
    id: 4,
    code: '',
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
    case 'DEFAULT_VALUE_PROMOTION':
      return { ...initState }
    case 'GENERATE_PROMOTION':
      return [ ...state, action.prop ]
    case 'EDIT_PROMOTION':
      return state.map(value => value.id === action.prop.id
        ? action.prop
        : value
      )
    default:
      return state
  }
}

export default promotionReducer
