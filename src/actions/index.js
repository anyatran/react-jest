import { getProducts, buyProducts } from '../api/shop'
import * as types from '../constants/ActionTypes'

// ACTION CREATORS
const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

const removeFromCartUnsafe = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
})

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

export const addToCart = productId => (dispatch, getState) => {
  console.log('hello')
  // check if inventory > 0
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const removeFromCart = productId => (dispatch, getState) => {
  // check if cart > 0
  if (getState().cart.byId[productId].quantity > 0) {
    dispatch(removeFromCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })

  buyProducts(products, () => {
    // update cart/inventory on success
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}
