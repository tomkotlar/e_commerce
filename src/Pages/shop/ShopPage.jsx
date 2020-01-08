import React from "react"
import Collection from "../../Components/preview/Collection"
import { createStructuredSelector } from "reselect"
import { selectCollections } from "../../redux/shop/shop.selectors"
import { connect } from "react-redux"

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Collection key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)
