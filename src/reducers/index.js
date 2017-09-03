import { combineReducers } from 'redux'
import restaurantReducer from './restaurantReducer'
import promotionReducer from './promotionReducer'
import tableReducer from './tableReducer'

const rootReducer = combineReducers({
  restaurantReducer,
  promotionReducer,
  tableReducer
})

export default rootReducer
