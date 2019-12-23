import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import currency from 'currency.js'
import Loader from './utils/Loader'

const Store = ({products}) => (
  <div className="row justify-content-center">
    {
      products.length > 0 ?
        products.map(product => {
          return (
            <div className="col-sm-4 p-2" key={product.sync_product.id}>
              <figure className="figure store-figure">
                <img className="figure-img img-fluid" src={product.sync_product.thumbnail_url} alt={product.sync_product.name} />
                <figcaption>
                  <h5>{product.sync_product.name}</h5>
                  <h6>{currency(product.sync_variants[0].retail_price).format(true)}</h6>
                  <Link className="btn btn-pinkish" to={`/product/${product.sync_product.id}`} role="button">View</Link>
                </figcaption>
              </figure>
            </div>
          )
        })
        : <Loader />
    }
  </div>
)

Store.propTypes = {
  products: PropTypes.array
}

export default Store