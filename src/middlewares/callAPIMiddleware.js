'user strict'

import 'isomorphic-fetch'



// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it
// was.

function callAPIMiddleware({ dispatch, getState }) {
  return next => (action) => {
    return next(action)
  }
}

export default callAPIMiddleware
