import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {} // {id: quantity}
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [action.productId]: (state[action.productId] || 0) + 1 }
    case REMOVE_FROM_CART:
      if (state[action.productId]) {
        if (state[action.productId] > 1) {
          return { ...state, [action.productId]: state[action.productId] - 1 }
        } else {
          return Object.keys(state).reduce((newState, productId) => {
            if (productId !== action.productId) {
              newState[productId] = state[productId]
            }
            return newState
          }, {})
        }
      } else {
        return state
      }
    default:
      return state
  }
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) < 0) {
        return [
          ...state,
          action.productId
        ]
      } else {
        return state
      }
    case REMOVE_FROM_CART:
      return state.filter(productId => productId !== action.productId)
    default:
      return state
  }
}

export const getQuantity = (state, productId) => {
  return state.quantityById[productId] || 0
}

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return state
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
