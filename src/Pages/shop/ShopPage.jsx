import React from "react"
import CollectionsOverview from "../../Components/collections-overview/CollectionsOverview"
import { Route } from "react-router-dom"
import CollectionPage from "../collection/CollectionPage"

// match is object form reasct-route-dom
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
