let initState = {
  counterBar: 12,
  tableForTwo: 4,
  tableForFour: 6,
  tableForEight: 2,
}

const tableReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_INCREASE_TABLE':
      return { ...state, [action.prop]: state[action.prop] + action.reserveCount }
    case 'UPDATE_DECREASE_TABLE':
      return { ...state, [action.prop]: state[action.prop] - action.reserveCount }
    case 'UPDATE_RESERVE_TABLE':
      return [ action.prop ]
    default:
      return state
  }
}

export default tableReducer
