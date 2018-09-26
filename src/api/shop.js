import products from './products.json'

const TIMEOUT = 100

export const getProducts = (cb, timeout) => setTimeout(() => cb(products), timeout || TIMEOUT)

export const buyProducts = (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
