import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import DevTools from './DevTools'
import callAPIMiddleware from '../middlewares/callAPIMiddleware'
import rootReducer from '../reducers'

const storeEnhancer = [applyMiddleware(thunk, callAPIMiddleware)]

if (process.env.NODE_ENV !== 'production') {
  storeEnhancer.push(DevTools.instrument())
}

const finalCreateStore = compose(...storeEnhancer)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
