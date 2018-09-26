import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ title, price, quantity }) => (
  <div>
    {title} - {price}{quantity ? `x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
}

export default Product
