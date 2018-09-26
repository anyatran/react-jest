import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  cart,
  products
})

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, productId) => fromProducts.getProduct(state.products, productId)

export const getTotal = state => {
  return getAddedIds(state).reduce((total, id ) => total + getProduct(state, id).price * getQuantity(state, id), 0)
}

export const getCartProducts = state => {
  return getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))
}
