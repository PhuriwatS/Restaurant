import { combineReducers } from 'redux'
import restaurantReducer from './restaurantReducer'
import promotionReducer from './promotionReducer'
import reservationReducer from './reservationReducer';

const rootReducer = combineReducers({
  restaurantReducer,
  promotionReducer,
  reservationReducer
})

export default rootReducer
