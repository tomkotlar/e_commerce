import React from "react"
import Collection from "../preview/Collection"
import { createStructuredSelector } from "reselect"
import { selectCollections } from "../../redux/shop/shop.selectors"
import { connect } from "react-redux"

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Collection key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})
export default connect(mapStateToProps)(CollectionsOverview)
