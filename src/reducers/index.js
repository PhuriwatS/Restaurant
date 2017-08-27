import { combineReducers } from 'redux'
import restaurantReducer from './restaurantReducer'
import promotionReducer from './promotionReducer'

const rootReducer = combineReducers({
  restaurantReducer,
  promotionReducer
})

export default rootReducer
