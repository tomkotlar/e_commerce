import React from "react"
import "./CollectionPage.styles.scss"
import { selectCollection } from "../../redux/shop/shop.selectors"
import { connect } from "react-redux"

const CollectionPage = ({ collection }) => {
   console.log(collection, '<------')
  return (
    <div className="collection-page">
      <h2>category page</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps) (CollectionPage)
