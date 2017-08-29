let initState = {
  counterBar: {
    max: 12,
    reserved: 0
  },
  tableForEight: {
    max: 2,
    reserved: 0
  },
  tableForFour: {
    max: 4,
    reserved: 0
  },
  tableForTwo: {
    max: 2,
    reserved: 0
  },
}

const reservationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DEFAULT_VALUE_RESERVATION':
      return { ...initState }
    default:
      return state
  }
}

export default reservationReducer
